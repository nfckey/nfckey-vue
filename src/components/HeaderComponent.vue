<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { Menu, X, Home } from 'lucide-vue-next'
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

const isOpen = ref(false)

const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
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

const teamLinks = [
  {
    href: '/team',
    title: 'Команда',
    description: 'Талантливые люди, воплощающие инновации в жизнь.'
  },
  {
    href: '/team#priorities',
    title: 'Приоритеты',
    description: 'Ценности и приоритеты, которым привержена наша команда.'
  },
  {
    href: '/team#achievements',
    title: 'Достижения',
    description: 'Результаты участия проекта в конкурсах и других мероприятиях.'
  },
  {
    href: '/team#media',
    title: 'Медиа',
    description: 'Эксклюзивные материалы о проекте на сторонних веб-ресурсах.'
  }
]
</script>

<template>
  <header class="bg-white mx-auto w-full md:px-8 px-4 py-5">
    <div class="items-center max-w-screen-xl justify-between lg:flex lg:px-8">
      <div class="flex items-center justify-between lg:block">
        <router-link to="/">
          <img class="logo" src="../assets/logo.svg" alt="Логотип NFCKEY" />
        </router-link>
        <div class="lg:hidden">
          <Button variant="outline" size="icon" @click="isOpen = !isOpen">
            <X class="w-4 h-4" v-if="isOpen" />
            <Menu class="w-4 h-4" v-else />
          </Button>
        </div>
      </div>

      <collapse-transition>
        <div
          v-show="isOpen || isLargeScreen"
          class="menu lg:menu--desktop bg-white flex justify-center justify-self-center"
        >
          <NavigationMenu>
            <NavigationMenuList class="flex-col sm:flex-row flex-1">
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
                  <ul class="grid gap-3 p-4 lg:grid-cols-2 md:w-[400px] lg:w-[500px]">
                    <NavigationMenuListItem
                      v-for="component in teamLinks"
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
