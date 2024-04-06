<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

import { NotificationsForm } from '@/components/ui/form'
import { TelegramPlane } from '@/components/ui/icons'
import LogoComponent from '@/components/ui/logo/LogoComponent.vue'
import { Mail } from 'lucide-vue-next'

const year = new Date().getFullYear()

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '-30% center',
      end: '-30% center'
    }
  })

  tl.from('.footer__logo', { opacity: 0, duration: 1 })
    .from('.footer-links', { opacity: 0, stagger: 0.3 })
    .from('.footer-links .footer-link', { opacity: 0, stagger: 0.1 })
    .from('#notifications', { x: 50, opacity: 0, duration: 1 }, 1)
    .from('.footer__contacts li', { opacity: 0, stagger: 0.2 })
    .from('.footer__copyright', { opacity: 0, duration: 1 })
})

const footerLinks = [
  {
    name: 'Продукт',
    links: [
      {
        name: 'Преимущества',
        href: '/#advantages'
      },
      {
        name: 'Особенности',
        href: '/#features'
      },
      {
        name: 'Арендодателям',
        href: '/landlords'
      },
      {
        name: 'Подписка',
        href: '/pricing'
      }
    ]
  },
  {
    name: 'О проекте',
    links: [
      {
        name: 'Команда',
        href: '/about'
      },
      {
        name: 'Приоритеты',
        href: '/about#priorities'
      },
      {
        name: 'Наша история',
        href: '/about#story'
      },
      {
        name: 'Публикации',
        href: '/about#publishing'
      }
    ]
  },
  {
    name: 'Помощь',
    links: [
      {
        name: 'Часто задаваемые вопросы',
        href: '/faq'
      },
      {
        name: 'Политика конфиденциальности',
        href: '/privacy'
      },
      {
        name: 'Персональные данные',
        href: '/personal'
      }
    ]
  }
]
</script>

<template>
  <footer class="container mx-auto w-full p-10 pt-36">
    <div class="footer_items-auto flex flex-col justify-center gap-16">
      <div class="footer__logo">
        <LogoComponent />
        <p class="para-xs">Умные замки с инновационным подходом</p>
      </div>
      <div class="flex flex-col gap-24 xl:w-full xl:flex-row xl:justify-between">
        <div class="footer-links">
          <div
            v-for="(section, sectionIdx) in footerLinks"
            :key="sectionIdx"
            class="footer-links__section"
          >
            <p class="footer-links__section__title">{{ section.name }}</p>
            <ul class="flex flex-col items-start gap-4">
              <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
                <router-link :to="link.href" class="footer-link">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <NotificationsForm />
      </div>
      <div class="footer_items-auto flex flex-col gap-6">
        <ul class="footer__contacts">
          <li>
            <a href="mailto:help@nfckey.tech" class="footer__contacts-link">
              <Mail class="footer__contacts-link__icon" />
              help@nfckey.tech
            </a>
          </li>
          <li>
            <a href="https://t.me/ivan_menyaylov" class="footer__contacts-link">
              <TelegramPlane class="footer__contacts-link__icon" />
              Руководитель проекта
            </a>
          </li>
          <li>
            <a href="https://t.me/nfckey" class="footer__contacts-link">
              <TelegramPlane class="footer__contacts-link__icon" />
              Telegram-канал
            </a>
          </li>
        </ul>
        <p class="footer__copyright">&copy; NFCKEY, 2023 – {{ year }}</p>
      </div>
    </div>
  </footer>
</template>
