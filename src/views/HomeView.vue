<script setup>
import { gsap } from 'gsap'
import mediumZoom from 'medium-zoom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { onMounted, onUnmounted } from 'vue'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { AvatarList } from '@/components/ui/avatar'
import { BentoGrid } from '@/components/ui/grid'
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
import { OpportunitiesCard } from '@/components/ui/subscription'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ArrowRight, Bell, ChevronRight } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

const ctx = gsap.context(() => {})

onMounted(() => {
  mediumZoom('[data-zoomable]')

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
    .from('.hero__content-title', { opacity: 0, duration: 1.5 }, 0.5)
    .fromTo(
      '.hero__image',
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1.5,
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: 'all' })
          document.querySelector('.hero__image-container').style.setProperty('--opt', '100')
        }
      },
      0.5
    )
    .from('.hero__content-subtitle', { y: 50, opacity: 0, duration: 0.8 }, 0.8)
    .from('.hero__content-btn-group', { y: 50, opacity: 0, duration: 0.8 }, 1)

  animateOnScroll('#features', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#how-it-works', '.how-it-works__title', { duration: 2, text: '' }, '30%')
  animateOnScroll('#how-it-works', '.how-it-works__video', { opacity: 0, x: 25, duration: 2 })
  animateOnScroll('#pricing', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#pricing', '.bullet-point', { opacity: 0, stagger: 0.3 })
  animateOnScroll('#team', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#team', '.team__person', { opacity: 0, stagger: 0.2 })
  animateOnScroll('#faq', '.subtitle_la', { opacity: 0, x: -50, duration: 1 }, '-30%')
  animateOnScroll('#faq', '.faq-list div', { opacity: 0, x: -50, stagger: 0.1 })
  animateOnScroll('#pre-order', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
}

onUnmounted(() => {
  ctx.revert()
})

const scrollToCTA = () => {
  document.querySelector('#pre-order').scrollIntoView({ behavior: 'smooth' })
}

function getImageUrl(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

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
      '<p>Да, замки NFCKEY разрабатываются таким образом, чтобы быть универсальными для установки в различные типы дверей. Мы сможем предоставить более подробные сведения ближе к моменту выхода замков NFCKEY на рынок.</p><br><p>Если у вас есть конкретные вопросы или требования к установке, мы всегда готовы помочь вам в обеспечении беспроблемного процесса установки.</p>'
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
          <button class="hero-btn" @click="scrollToCTA">
            <p class="hero-btn__text">Будьте в числе первых</p>
            <ChevronRight class="ml-2 h-6 w-6" />
          </button>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <!-- Dialog -->
                <Dialog>
                  <DialogTrigger as-child>
                    <Button variant="outline" class="hero-btn_notifications">
                      <Bell class="hero-btn_notifications-icon" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent class="max-w-md">
                    <div class="flex items-center justify-center space-x-2">
                      <NotificationsForm inDialog />
                    </div>
                  </DialogContent>
                </Dialog>
                <!-- Dialog end -->
              </TooltipTrigger>
              <TooltipContent>
                <p class="font-inter">Получите уведомление перед началом продаж</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div class="hero__image-container" style="--opt: 0">
        <img
          alt="Умный замок NFCKEY"
          class="hero__image"
          style="opacity: 0"
          src="@/assets/images/hero-o50.webp"
        />
      </div>
    </div>
  </section>
  <section id="features">
    <div class="flex flex-col items-center gap-16">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient">
          Открывайте двери одним касанием вашего смартфона
        </h2>
      </div>
      <BentoGrid />
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
          <source src="@/assets/videos/how-it-works.mp4" type="video/mp4" />
          <track
            src="@/assets/videos/how-it-works.vtt"
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
        <Carousel class="mb-6 w-full max-w-xs md:max-w-md">
          <CarouselContent class="pb-4">
            <CarouselItem>
              <img
                class="pricing__image"
                src="@/assets/images/product-1.webp"
                :data-zoom-src="getImageUrl('product-1-detailed.webp')"
                alt="Умный замок NFCKEY"
                loading="lazy"
                data-zoomable
              />
            </CarouselItem>
            <CarouselItem>
              <img
                class="pricing__image"
                src="@/assets/images/product-2.webp"
                :data-zoom-src="getImageUrl('product-2-detailed.webp')"
                alt="Умный замок NFCKEY"
                loading="lazy"
                data-zoomable
              />
            </CarouselItem>
            <CarouselItem>
              <img
                class="pricing__image"
                src="@/assets/images/product-3.webp"
                :data-zoom-src="getImageUrl('product-3-detailed.webp')"
                alt="Умный замок NFCKEY"
                loading="lazy"
                data-zoomable
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div class="pricing__content">
          <div class="flex flex-col items-center justify-start gap-4 self-stretch xl:items-start">
            <p class="pricing__title">Умный замок ShareLock</p>
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
            src="@/assets/qr-nfckey-telegram.svg"
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
