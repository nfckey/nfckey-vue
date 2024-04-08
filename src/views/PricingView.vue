<script setup>
import axios from 'axios'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

import { SubscriptionCardList, SubscriptionTable } from '@/components/ui/subscription'

gsap.registerPlugin(ScrollTrigger)

const ctx = gsap.context(() => {})
const subscriptions = ref([])
const limits = ref([])
const subscriptionsLoaded = ref(false)
const limitsLoaded = ref(false)
const isFamily = ref(true)
const isAnnual = ref(true)

onMounted(async () => {
  try {
    const { data } = await axios.get('https://api.nfckey.tech/api/v1/subscriptions?limits=true')
    subscriptions.value = data
    subscriptionsLoaded.value = true
  } catch (error) {
    console.log(error)
  }

  try {
    const { data } = await axios.get('https://api.nfckey.tech/api/v1/limits')
    limits.value = data
    limitsLoaded.value = true
  } catch (error) {
    console.log(error)
  }
})

watch(subscriptions, () => {
  nextTick(() => {
    ctx.add(() => {
      ScrollTrigger.batch('#subscription .sub-card', {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            stagger: 0.3
          })
        }
      })
    })
  })
})

watch(isFamily, () => {
  ctx.revert()
  nextTick(() => {
    ctx.add(() => {
      ScrollTrigger.batch('#subscription .sub-card', {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            stagger: 0.3
          })
        }
      })
    })
  })
})

onUnmounted(() => {
  ctx.revert()
})

const switchSubPrice = (value) => {
  isAnnual.value = value
}

const switchSubType = (index) => {
  if (isFamily.value != index) return

  const typeSwitch = document.querySelector('.subscription-type-switch')
  typeSwitch.style.setProperty('--bg-offset', `${50 * index}%`)
  typeSwitch.classList.toggle('subscription-type-switch_family')
  typeSwitch.classList.toggle('subscription-type-switch_landlords')

  isFamily.value = !isFamily.value
}

const filterSubscriptions = (subscriptions, type1, type2) => {
  return subscriptions.filter(
    (subscription) => subscription.type === type1 || subscription.type === type2
  )
}
</script>

<template>
  <section id="subscription" class="min-h-max">
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

      <div class="subscription-type-switch subscription-type-switch_family" style="--bg-offset: 0%">
        <button @click="switchSubType(0)">
          <span :class="{ '!text-brand-400 hover:!text-brand-500': isFamily }"> Семьям </span>
        </button>
        <button @click="switchSubType(1)">
          <span :class="{ '!text-warning-400 hover:!text-warning-500': !isFamily }">
            Арендодателям
          </span>
        </button>
      </div>

      <SubscriptionCardList
        v-if="subscriptionsLoaded"
        :items="
          isFamily
            ? filterSubscriptions(subscriptions.data, 'Семьям', 'Универсальная')
            : filterSubscriptions(subscriptions.data, 'Арендодателям', 'Универсальная')
        "
        includeFree
        includeWarranty
        @price-switched="switchSubPrice"
      />
    </div>
  </section>
  <section id="comparison" class="min-h-max">
    <SubscriptionTable
      v-if="subscriptionsLoaded && limitsLoaded"
      :items="
        isFamily
          ? filterSubscriptions(subscriptions.data, 'Семьям', 'Универсальная')
          : filterSubscriptions(subscriptions.data, 'Арендодателям', 'Универсальная')
      "
      :limits="limits.data"
      :isAnnual="isAnnual"
    />
  </section>
</template>
