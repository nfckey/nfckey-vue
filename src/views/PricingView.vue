<script setup>
import axios from 'axios'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { nextTick, onMounted, ref, watch } from 'vue'

import { SubscriptionCardList } from '@/components/ui/cards'

gsap.registerPlugin(ScrollTrigger)

const subscriptions = ref([])
const loaded = ref(false)
const isFamily = ref(true)

onMounted(async () => {
  try {
    const { data } = await axios.get('https://api.nfckey.tech/api/v1/subscriptions?limits=true')
    subscriptions.value = data
    loaded.value = true
  } catch (error) {
    console.log(error)
  }
})

const animateOnScroll = (trigger, elements, options, triggerPos) => {
  gsap.from(trigger + ' ' + elements, {
    ...options,
    scrollTrigger: {
      trigger: trigger,
      start: triggerPos ? `${triggerPos} center` : 'top center',
      end: triggerPos ? `${triggerPos} center` : 'top center'
    }
  })
}

watch(subscriptions, () => {
  nextTick(() => {
    animateOnScroll('#subscription', '.sub-card', {
      opacity: 0,
      y: -50,
      stagger: 0.5,
      duration: 0.7
    })
  })
})

const slideBg = (index) => {
  if (isFamily.value != index) return
  const typeSwitch = document.querySelector('.pricing-type-switch')
  typeSwitch.style.setProperty('--bg-offset', `${50 * index}%`)

  typeSwitch.classList.toggle('pricing-type-switch_family')
  typeSwitch.classList.toggle('pricing-type-switch_landlords')
  isFamily.value = !isFamily.value
}
</script>

<template>
  <section id="subscription">
    <div class="flex flex-col items-center gap-8">
      <div class="subtitle_ca">
        <h1 class="subtitle_ca__title subtitle_ca__title_gradient">
          Разблокируйте дополнительные преимущества с подпиской
        </h1>
        <p class="subtitle_ca__text">
          Откройте для себя ряд тарифных планов, разработанных с учетом уникальных потребностей
          семей и арендодателей
        </p>
      </div>

      <div class="pricing-type-switch pricing-type-switch_family" style="--bg-offset: 0%">
        <button @click="slideBg(0)">
          <span :class="{ '!text-brand-400 hover:!text-brand-500': isFamily }"> Семьям </span>
        </button>
        <button @click="slideBg(1)">
          <span :class="{ '!text-warning-400 hover:!text-warning-500': !isFamily }">
            Арендодателям
          </span>
        </button>
      </div>

      <SubscriptionCardList
        v-if="loaded"
        :items="
          isFamily
            ? subscriptions.data.slice(0, 4)
            : subscriptions.data.slice(0, 1).concat(subscriptions.data.slice(4))
        "
        includeFree
      />
    </div>
  </section>
</template>
