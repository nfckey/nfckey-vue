<script setup>
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { AdvantagesList, AdvantagesListItem } from '@/components/ui/advantages'
import { AvatarList } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { NotificationsForm } from '@/components/ui/form'
import { PublishingList } from '@/components/ui/publishing'
import { OpportunitiesCard, SubscriptionCardList } from '@/components/ui/subscription'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ArrowRight, Bell, ChevronRight, Sparkles } from 'lucide-vue-next'

import heroImg100 from '../assets/images/hero-o100.webp'
import heroImg50 from '../assets/images/hero-o50.webp'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

const ctx = gsap.context(() => {})

onMounted(() => {
  ctx.add(() => {
    initializeAnimations()
  })
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

const initializeAnimations = () => {
  const tl = gsap.timeline()
  tl.from('.hero__gradient', { opacity: 0, duration: 1.5 }, 0.5)
    .from('.hero__content-title', { x: -50, opacity: 0, duration: 1.5 }, 0.5)
    .fromTo(
      '.hero__image',
      {
        x: 50,
        opacity: 0
      },
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
    .from('.hero__content-subtitle', { y: 50, opacity: 0, duration: 1 }, 1.5)
    .from('.hero__content-btn-group', { y: 50, opacity: 0, duration: 1 }, 1.7)

  animateOnScroll('#advantages', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#advantages', '.advantages-item', { opacity: 0, stagger: 0.3, duration: 1 })
  animateOnScroll('#features', '.subtitle_la', { opacity: 0, x: -50, duration: 1 }, '-30%')
  animateOnScroll('#features', '.feature', { opacity: 0, x: -50, stagger: 0.4, duration: 1 })
  animateOnScroll('#features', '.features__image', { opacity: 0, y: 100, duration: 1 })
  animateOnScroll('#how-it-works', '.how-it-works__title', { duration: 2, text: '' }, '30%')
  animateOnScroll('#how-it-works', '.how-it-works__video', { opacity: 0, x: 25, duration: 2 })
  animateOnScroll('#pricing', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#pricing', '.pricing__image, .pricing__content', { opacity: 0, duration: 1 })
  animateOnScroll('#pricing', '.bullet-point', { opacity: 0, stagger: 0.3 })
  animateOnScroll('#pricing', '.pricing__price-clarification', { duration: 2, delay: 2, text: '' })
  animateOnScroll('#subscription', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#team', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#team', '.team__person', { opacity: 0, stagger: 0.2 })
  animateOnScroll('#faq', '.subtitle_la', { opacity: 0, x: -50, duration: 1 }, '-30%')
  animateOnScroll('#faq', '.faq-list div', { opacity: 0, x: -50, stagger: 0.1 })
  animateOnScroll('#pre-order', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
}

const subscriptions = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://api.nfckey.tech/api/v1/subscriptions?type=Семьям&limits=true'
    )
    subscriptions.value = data
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

onUnmounted(() => {
  ctx.revert()
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

const faqItems = [
  {
    title: 'Как работает система замков NFCKEY?',
    content:
      'В основе работы замка и мобильного приложения лежит технология NFC, которая обеспечивает безопасный обмен данными при приближении устройства. После проверки зашифрованного цифрового ключа и всех необходимых разрешений механизм замка открывает дверь.'
  },
  {
    title: 'Замок может помочь, если я сдаю в аренду свою квартиру?',
    content:
      'Да, вы можете создавать и отправлять ключи вашим арендаторам в нашем приложении, а после их выселения ключ можно удалить. Подробнее о преимуществах, предоставляемых арендодателям, вы можете узнать на отдельной странице <a href="./landlords">«Арендодателям»</a> нашего веб-сайта.'
  },
  {
    title: 'Как NFCKEY обеспечивает безопасность моей квартиры?',
    content:
      '<p>Для обеспечения безопасности в системе NFCKEY используются современные и проверенные технологии шифрования данных. Доступ к двери могут получить только авторизованные пользователи, имеющие соответствующий цифровой ключ в приложении NFCKEY.</p><br><p>С точки зрения механической защиты, основные компоненты замочного механизма не могут быть достигнуты с внешней стороны двери.</p>'
  },
  {
    title: 'Можно ли устанавливать замки NFCKEY в различные типы дверей?',
    content:
      '<p>Да, замки NFCKEY разрабатываются таким образом, чтобы быть универсальными для установки в различные типы дверей. Мы сможем предоставить Более подробные сведения ближе к моменту выхода замков NFCKEY на рынок.</p><br><p>Если у вас есть конкретные вопросы или требования к установке, мы всегда готовы помочь вам в обеспечении беспроблемного процесса установки.</p>'
  },
  {
    title: 'Обязательно ли приобретать подписку для работы системы NFCKEY?',
    content:
      'Нет, для работы основных функций системы умных замков NFCKEY не требуется приобретать подписку.'
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
          <router-link to="#pre-order">
            <button class="hero-btn">
              <p class="hero-btn__text">Будьте в числе первых</p>
              <ChevronRight class="ml-2 h-6 w-6" />
            </button>
          </router-link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <!-- DIALOG -->
                <Dialog>
                  <DialogTrigger as-child>
                    <Button variant="outline" class="hero-btn_notifications">
                      <Bell class="hero-btn_notifications-icon" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent class="sm:max-w-lg xl:max-w-lg">
                    <div class="flex items-center justify-start space-x-2">
                      <NotificationsForm inDialog />
                    </div>
                  </DialogContent>
                </Dialog>
                <!-- DIALOG END -->
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
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient">
          Открывайте дверь одним касанием смартфона
        </h2>
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
            <Sparkles class="shrink-0 text-brand-400" />
            <div class="feature__content">
              <p class="feature__title">Технология NFC</p>
              <p class="feature__text">
                Открывайте двери одним касанием телефона с помощью технологии Near Field
                Communication
              </p>
            </div>
          </div>
          <div class="feature">
            <Sparkles class="shrink-0 text-brand-400" />
            <div class="feature__content">
              <p class="feature__title">Удобное мобильное приложение</p>
              <p class="feature__text">
                Наше интуитивно понятное мобильное приложение создано для беспрепятственного
                управления доступом и множеством других функций вашего замка
              </p>
            </div>
          </div>
          <div class="feature">
            <Sparkles class="shrink-0 text-brand-400" />
            <div class="feature__content">
              <p class="feature__title">Открытие дверей без интернета</p>
              <p class="feature__text">
                Вы можете открывать двери без подключения к интернету, получая бесперебойный доступ
                при любых ситуациях
              </p>
            </div>
          </div>
          <div class="feature">
            <Sparkles class="shrink-0 text-brand-400" />
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
        src="../assets/images/waves-mockup.png"
        alt="Мобильный телефон с технологией NFC"
        class="features__image"
      />
    </div>
  </section>
  <section id="how-it-works" class="flex items-center">
    <div class="flex items-center justify-center">
      <div class="how-it-works__content">
        <h2 class="how-it-works__title">Как <br />работает <br />наш замок?</h2>
        <video
          class="how-it-works__video bg-black"
          preload="metadata"
          controls
          playsinline
          controlsList="nodownload noremoteplayback noplaybackrate"
        >
          <source src="../assets/videos/how-it-works.mp4" type="video/mp4" />
          <track
            src="../assets/videos/how-it-works.vtt"
            kind="subtitles"
            srclang="ru"
            label="Русские субтитры"
          />
        </video>
      </div>
    </div>
  </section>
  <section id="pricing">
    <div class="flex flex-col items-center gap-24">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient">
          Инвестируйте в безопасность своего будущего с NFCKEY
        </h2>
        <p class="subtitle_ca__text">
          Замок NFCKEY – одноразовая покупка, которая обеспечивает безопасность вашего дома на
          неограниченный срок
        </p>
      </div>
      <div class="flex w-full flex-col items-center justify-around gap-8 xl:flex-row">
        <Carousel class="relative mx-14 w-full max-w-xs md:max-w-md">
          <CarouselContent>
            <CarouselItem>
              <img
                class="pricing__image"
                src="../assets/images/product-1.png"
                alt="Умный замок NFCKEY"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                class="pricing__image"
                src="../assets/images/product-2.png"
                alt="Умный замок NFCKEY"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                class="pricing__image"
                src="../assets/images/product-3.png"
                alt="Умный замок NFCKEY"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div class="pricing__content">
          <div class="flex flex-col items-center justify-start gap-4 self-stretch xl:items-start">
            <p class="pricing__title">Умный замок NFCKEY</p>
            <div class="flex flex-col gap-2">
              <p class="h50">Предварительная стоимость:</p>
              <div class="flex justify-center gap-2 xl:justify-start">
                <p class="pricing__price">15 990 ₽</p>
                <p class="h100 font-semibold">*</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center gap-4">
            <OpportunitiesCard />
            <p class="pricing__price-clarification">
              * Цена является ориентировочной и может измениться к моменту выхода на рынок
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="subscription" class="min-h-max">
    <div class="flex flex-col items-center gap-8">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient sm:h400 text-4xl">
          Раскройте весь потенциал умного замка с помощью подписки
        </h2>
        <p class="subtitle_ca__text">
          Дополните преимущества бесплатного тарифа, выбрав вариант подписки под ваши уникальные
          потребности
        </p>
        <router-link to="/pricing">
          <Button variant="link" class="subtitle_ca__action">
            <p>Посмотреть все варианты</p>
            <ArrowRight class="h-5 w-5 text-brand-400" />
          </Button>
        </router-link>
      </div>
      <SubscriptionCardList :items="subscriptions.data" />
    </div>
  </section>
  <section id="faq" class="min-h-max">
    <div class="flex flex-wrap items-start justify-start gap-16 md:flex-nowrap md:justify-center">
      <div class="subtitle_la max-w-lg">
        <h2 class="subtitle_la__title subtitle_la__title_gradient h300">
          Получите ясность о решении NFCKEY в разделе FAQ
        </h2>
        <p class="subtitle_la__text">
          Изучите раздел с часто задаваемыми вопросами, чтобы узнать, как NFCKEY может органично
          вписаться в ваш образ жизни
        </p>
        <router-link to="/faq">
          <Button class="gap-2 bg-brand-400 hover:bg-brand-300">
            <p class="h50 font-medium">Перейти в раздел FAQ</p>
            <ArrowRight class="h-5 w-5 text-white" />
          </Button>
        </router-link>
      </div>
      <Accordion type="multiple" class="faq-list faq-list_home" collapsible>
        <AccordionItem v-for="(item, index) in faqItems" :key="index" :value="`item-${index}`">
          <AccordionTrigger class="text-start">{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            <div class="faq-list__content faq-list__content_home" v-html="item.content"></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
  <section id="team" class="min-h-max">
    <div class="flex flex-col items-center gap-24">
      <div class="subtitle_ca">
        <p class="subtitle_ca__subheading subtitle_ca__title_gradient bg-gradient-to-r">
          Наша команда
        </p>
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient bg-gradient-to-r">
          Воплощаем инновации в жизнь
        </h2>
      </div>
      <AvatarList />
    </div>
  </section>
  <section id="publishing" class="min-h-max">
    <div class="flex flex-col items-center gap-16">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient bg-gradient-to-r">
          Узнайте о нас больше
        </h2>
        <p class="subtitle_ca__text">
          Приглашаем ознакомиться с нашими эксклюзивными публикациями на других ресурсах
        </p>
      </div>
      <PublishingList />
    </div>
  </section>
  <section id="pre-order" class="min-h-max">
    <div class="flex flex-col items-center gap-16">
      <div class="subtitle_ca">
        <p class="subtitle_ca__subheading subtitle_ca__title_gradient bg-gradient-to-r">
          Будьте в числе первых
        </p>
        <h2
          class="subtitle_ca__title subtitle_ca__title_gradient sm:h400 text-4xl md:bg-gradient-to-r"
        >
          Готовы перейти на новый уровень?
        </h2>
        <p class="subtitle_ca__text subtitle_ca__text_pre-order">
          Узнайте о выходе NFCKEY на рынок первыми, подписавшись на наш
          <a
            class="text-brand-400 hover:underline hover:underline-offset-4"
            href="https://t.me/nfckey"
          >
            Telegram-канал
          </a>
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <a
          class="flex flex-col items-center justify-center hover:text-brand-400"
          href="https://t.me/nfckey"
        >
          <img
            src="../assets/qr-nfckey-telegram.svg"
            alt="Телеграм-канал NFCKEY"
            class="w-full max-w-80"
          />
          <p class="h50 max-w-96 text-balance text-center font-medium transition-colors">
            NFCKEY в Telegram – последние события, эксклюзивные материалы и инсайды
          </p>
        </a>
      </div>
    </div>
  </section>
</template>
