<script setup>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { gsap } from 'gsap'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Home, Menu, X } from 'lucide-vue-next'
import LogoComponent from './ui/logo/LogoComponent.vue'

const isOpen = ref(false)

const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  const tl = gsap.timeline()
  tl.fromTo('.logo', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1.7)
    .fromTo('#menuBtn', { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 2.5)
    .fromTo(
      '.menu .group li',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
      2.5
    )
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const landlordsLinks = [
  {
    href: '/landlords#advantages',
    title: 'Преимущества',
    description: 'Перейдите на новый уровень удобства и контроля.'
  },
  {
    href: '/landlords#features',
    title: 'Особенности',
    description: 'Сделайте вашу роль арендодателя более эффективной и безопасной.'
  },
  {
    href: '/landlords#subscription',
    title: 'Подписка',
    description: 'Расширьте свои возможности с премиальными функциями.'
  }
]

const aboutLinks = [
  {
    href: '/about',
    title: 'Команда',
    description: 'Талантливые люди, воплощающие инновации в жизнь.'
  },
  {
    href: '/about#priorities',
    title: 'Приоритеты',
    description: 'Ценности и приоритеты, которым привержена наша команда.'
  },
  {
    href: '/about#story',
    title: 'Наша история',
    description: 'Результаты участия проекта в конкурсах и других мероприятиях.'
  },
  {
    href: '/about#publishing',
    title: 'Публикации',
    description: 'Эксклюзивные материалы о проекте на сторонних веб-ресурсах.'
  }
]
</script>

<template>
  <header class="container relative z-[5] mx-auto w-full py-5" :class="{ 'bg-white': isOpen }">
    <div class="max-w-screen-xl items-center justify-between lg:flex lg:px-8">
      <div class="flex items-center justify-between lg:block">
        <LogoComponent />
        <div class="lg:hidden" id="menuBtn">
          <Button variant="outline" size="icon" @click="isOpen = !isOpen">
            <X class="h-4 w-4" v-if="isOpen" />
            <Menu class="h-4 w-4" v-else />
          </Button>
        </div>
      </div>

      <collapse-transition>
        <div v-show="isOpen || isLargeScreen" class="menu lg:menu_desktop">
          <NavigationMenu>
            <NavigationMenuList class="flex-1 flex-col sm:flex-row">
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p class="menu-link">Арендодателям</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
                  >
                    <li class="row-span-3">
                      <NavigationMenuLink as-child>
                        <router-link
                          to="/landlords"
                          class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/50 to-orange-100 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Home class="h-6 w-6" />
                          <div class="mb-2 mt-4 text-lg font-medium">Арендодателям</div>
                          <p class="text-sm leading-tight text-muted-foreground">
                            Упростите процесс управления вашей недвижимостью.
                          </p>
                        </router-link>
                      </NavigationMenuLink>
                    </li>
                    <NavigationMenuListItem
                      v-for="component in landlordsLinks"
                      :key="component.title"
                      :title="component.title"
                      :description="component.description"
                      :href="component.href"
                    >
                    </NavigationMenuListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p class="menu-link">О проекте</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <NavigationMenuListItem
                      v-for="component in aboutLinks"
                      :key="component.title"
                      :title="component.title"
                      :description="component.description"
                      :href="component.href"
                    >
                    </NavigationMenuListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                  <router-link to="/pricing">
                    <p class="menu-link">Подписка</p>
                  </router-link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                  <router-link to="/faq">
                    <p class="menu-link">FAQ</p>
                  </router-link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </collapse-transition>
    </div>
  </header>
</template>
