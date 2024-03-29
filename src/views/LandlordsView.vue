<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted } from 'vue'

import { Users, Clock4, Shield, Heart } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const cardsRef = ref([])

const handleCardsGlow = (e) => {
  cardsRef.value.forEach((card) => {
    const rect = card.getBoundingClientRect()

    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  })
}

// const animateOnScroll = (trigger, elements, options, triggerPos) => {
//   gsap.from(trigger + ' ' + elements, {
//     ...options,
//     scrollTrigger: {
//       trigger: trigger,
//       start: triggerPos ? `${triggerPos} center` : 'top center',
//       end: triggerPos ? `${triggerPos} center` : 'top center'
//     }
//   })
// }

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.hero_ll .subtitle_ca', { opacity: 0, duration: 1 }, 0.5).from(
    '#advantages .advantages-card:nth-child(-n+2)',
    { opacity: 0, stagger: 0.3 },
    1
  )

  ScrollTrigger.batch('#advantages .advantages-card:nth-child(n+3)', {
    delay: 1,
    onEnter: (batch) => gsap.from(batch, { opacity: 0, stagger: 0.3, delay: 0.5 })
  })
})
</script>

<template>
  <section class="hero_ll">
    <div class="flex flex-col items-center justify-center">
      <div class="subtitle_ca">
        <p class="subtitle_ca__subheading subtitle_ca__title_gradient bg-gradient-to-r">
          NFCKEY для арендодателей
        </p>
        <h1 class="subtitle_ca__title subtitle_ca__title_gradient h500 sm:h600">
          Управляйте вашей недвижимостью с NFCKEY
        </h1>
        <p class="subtitle_ca__text">
          Теперь не нужно никуда ехать, чтобы передать ключ от квартиры. Просто нажмите кнопку
        </p>
      </div>
    </div>
  </section>
  <section id="advantages" class="advantages_ll" @mousemove="handleCardsGlow">
    <div class="flex flex-col items-center justify-center gap-8">
      <div class="advantages-cards">
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Users class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Управление доступом</p>
            <p class="advantages-card__text">
              Управляйте доступом жильцов и обслуживающего персонала, не выходя из телефона. Вам
              больше не придется беспокоиться о координации действий
            </p>
          </div>
        </div>
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Clock4 class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Экономия времени</p>
            <p class="advantages-card__text">
              Не тратьте время на дорогу, обслуживание и встречи. Впустить арендатора в квартиру
              можно нажав одну кнопку, в точности как и отозвать цифровой ключ
            </p>
          </div>
        </div>
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Shield class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Повышенная безопасность</p>
            <p class="advantages-card__text">
              Ваши данные и доступ в квартиру обеспечены самыми современными уровнями безопасности.
              Только вы – хозяин доступа в квартиру.
            </p>
          </div>
        </div>
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Heart class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Удовлетворенность гостей</p>
            <p class="advantages-card__text">
              Удобный и быстрый процесс регистрации привлечет больше людей, гарантируя положительные
              отзывы и высокую вероятность повторного бронирования
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
