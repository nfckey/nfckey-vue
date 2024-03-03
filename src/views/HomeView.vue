<script setup>
import { ChevronRight, Bell, Sparkles } from 'lucide-vue-next'
import { AdvantagesList, AdvantagesListItem } from '@/components/ui/advantages'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted } from 'vue'
import heroImg100 from '../assets/hero-o100.png'
import heroImg50 from '../assets/hero-o50.png'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline()
  tl.fromTo(
    '.hero__content-title',
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5 },
    0.5
  )
    .fromTo(
      '.hero__image',
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: 'all' })
        }
      },
      1
    )
    .fromTo(
      '.hero__content-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      1.5
    )
    .fromTo(
      '.hero__content-btn-group',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      1.7
    )

  gsap.from('.subtitle_ca', {
    scrollTrigger: {
      trigger: '#advantages',
      start: 'top center',
      end: 'top center'
    },
    opacity: 0,
    y: -50,
    duration: 1
  })

  gsap.from('.advantages-item', {
    scrollTrigger: {
      trigger: '#advantages',
      start: 'top center',
      end: 'top center'
    },
    opacity: 0,
    stagger: 0.3,
    duration: 1
  })

  gsap.from('.subtitle_la', {
    scrollTrigger: {
      trigger: '#features',
      start: 'top center',
      end: 'top center'
    },
    opacity: 0,
    x: -50,
    duration: 1
  })

  gsap.from('.feature', {
    scrollTrigger: {
      trigger: '#features',
      start: 'top center',
      end: 'top center'
    },
    opacity: 0,
    x: -50,
    stagger: 0.5,
    duration: 1
  })

  gsap.from('.features__image', {
    scrollTrigger: {
      trigger: '#features',
      start: 'top center',
      end: 'top center'
    },
    opacity: 0,
    y: 100,
    duration: 1
  })
})

const isHovered = ref(false)
const heroImgHover = () => {
  const heroImg = document.querySelector('.hero__image')
  heroImg.classList.add('hero__image_transitioning')
  isHovered.value = !isHovered.value

  setTimeout(() => {
    heroImg.src = isHovered.value ? heroImg100 : heroImg50
    heroImg.classList.remove('hero__image_transitioning')
  }, 295)
}

const advantages = [
  {
    title: 'Доступ без препятствий',
    description:
      'Попрощайтесь с поиском ключей – телефон позволит мгновенно получить доступ к вашему пространству',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>'
  },
  {
    title: 'Временный ключ одной кнопкой',
    description:
      'Вы можете выдать ключ вашим гостям или арендаторам и отозвать его в удобное для вас время. Быстро',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    title: 'Полная безопасность',
    description:
      'Мы используем современные и проверенные технологии шифрования данных и механической защиты замков',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  },
  {
    title: 'Мгновенные оповещения',
    description:
      'Получайте уведомления, кто и когда<br> открывает дверь, в режиме <br>реального времени',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-dot"><path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><circle cx="18" cy="8" r="3"/></svg>'
  },
  {
    title: 'Дистанционное управление',
    description:
      'Легко управляйте доступом на расстоянии и гибко настраивайте расписание доступа к замку',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>'
  },
  {
    title: 'Снижение ответственности',
    description:
      'Избавьтесь от неудобств и рисков несанкционированного доступа при использовании физических ключей',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>'
  }
]
</script>

<template>
  <section id="hero">
    <div class="hero__gradient">
      <div class="hero__gradient__ellipse hero__gradient__ellipse_1"></div>
      <div class="hero__gradient__ellipse hero__gradient__ellipse_2"></div>
    </div>
    <div class="mt-12 grid justify-items-center gap-8 lg:mt-0 lg:grid-cols-2">
      <div class="hero__content">
        <h1 class="hero__content-title">Ваше будущее без ключей начинается здесь</h1>
        <p class="hero__content-subtitle">
          NFCKEY – умные дверные замки с технологией NFC. Доступ без усилий и полный контроль –
          новый уровень комфорта и безопасности вашего дома.
        </p>
        <div class="hero__content-btn-group">
          <button class="hero-btn">
            <p class="h100-semibold">Будьте в числе первых</p>
            <ChevronRight class="ml-2 h-6 w-6" />
          </button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="outline" class="border-brand-400 py-6">
                  <Bell class="h-6 w-6 text-brand-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p class="font-inter">Получите уведомление перед началом продаж</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <img
        alt="Умный замок NFCKEY"
        class="hero__image"
        :src="heroImg50"
        @mouseover="heroImgHover"
        @mouseleave="heroImgHover"
      />
    </div>
  </section>
  <section id="advantages">
    <div class="flex flex-col items-center gap-24">
      <div class="subtitle_ca">
        <h1 class="subtitle_ca__title subtitle_ca__title_gradient">
          Открывайте дверь одним касанием смартфона
        </h1>
        <p class="subtitle_ca__text">
          Переосмысляем традиционные способы открытия дверей и расширяем возможности удобства и
          безопасности для частных лиц и арендодателей
        </p>
      </div>
      <AdvantagesList>
        <AdvantagesListItem
          v-for="(item, index) in advantages"
          :key="index"
          :title="item.title"
          :description="item.description"
        >
          <div class="icon_big text-brand-400" v-html="item.icon"></div>
        </AdvantagesListItem>
      </AdvantagesList>
    </div>
  </section>
  <section id="features">
    <div class="grid justify-items-center gap-8 xl:grid-cols-2">
      <div class="features__content">
        <div class="subtitle_la text-center xl:text-left">
          <h2 class="subtitle_la__title subtitle_la__title_gradient">
            Откройте новые возможности с помощью умных замков
          </h2>
          <p class="subtitle_la__text">
            Замки NFCKEY созданы для тех, кто хочет нового уровня комфорта, удобства и безопасности.
            Вы легко сможете контролировать, кто и когда открывает дверь вашего дома. Всегда.
          </p>
        </div>
        <div class="features__list">
          <div class="feature">
            <Sparkles class="text-brand-400" />
            <div class="feature__content">
              <p class="feature__title">Технология NFC</p>
              <p class="feature__text">
                Открывайте двери одним касанием телефона с помощью технологии Near Field
                Communication
              </p>
            </div>
          </div>
          <div class="feature">
            <Sparkles class="text-brand-400" />
            <div class="feature__content">
              <p class="feature__title">Удобное мобильное приложение</p>
              <p class="feature__text">
                Наше интуитивно понятное мобильное приложение создано для беспрепятственного
                управления доступом и множеством других функций вашего замка
              </p>
            </div>
          </div>
          <div class="feature">
            <Sparkles class="text-brand-400" />
            <div class="feature__content">
              <p class="feature__title">Открытие дверей без интернета</p>
              <p class="feature__text">
                Вы можете открывать двери без подключения к интернету, получая бесперебойный доступ
                при любых ситуациях
              </p>
            </div>
          </div>
          <div class="feature">
            <Sparkles class="text-brand-400" />
            <div class="feature__content">
              <p class="feature__title">Эффективность и элегантность</p>
              <p class="feature__text">
                Наш умный замок сочетает в себе длительное время работы от батареек и утонченный
                дизайн, позволяющий придать вашей двери современный шарм
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="../assets/waves-mockup.png"
        alt="Мобильный телефон с технологией NFC"
        class="features__image"
      />
    </div>
  </section>
</template>
