<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()
const isOpen = ref(false)

watch(route, () => {
  isOpen.value = false
})

const closeMenu = () => {
  isOpen.value = false
}

const landlordsLinks = [
  {
    href: '/landlords#advantages',
    title: 'Преимущества',
    description: 'Перейдите на новый уровень удобства и контроля'
  },
  {
    href: '/landlords#features',
    title: 'Особенности',
    description: 'Сделайте вашу роль арендодателя более эффективной и безопасной'
  },
  {
    href: '/landlords#subscription',
    title: 'Подписка',
    description: 'Расширьте свои возможности с премиальными функциями'
  }
]

const aboutLinks = [
  {
    href: '/about',
    title: 'Команда',
    description: 'Талантливые люди, воплощающие инновации в жизнь'
  },
  {
    href: '/about#priorities',
    title: 'Приоритеты',
    description: 'Ценности и приоритеты, которым привержена наша команда'
  },
  {
    href: '/about#story',
    title: 'Наша история',
    description: 'Результаты участия проекта в конкурсах и других мероприятиях'
  },
  {
    href: '/about#publishing',
    title: 'Публикации',
    description: 'Эксклюзивные материалы о проекте на сторонних веб-ресурсах'
  }
]
</script>

<template>
  <div class="fixed z-[5] flex w-[100vw] justify-center bg-transparent">
    <header class="header z-[5] w-[90vw] max-w-2xl" :class="{ header__active: isOpen }">
      <div class="flex w-full items-center justify-between md:w-max">
        <LogoComponent />
        <div class="md:hidden">
          <Button variant="outline" size="icon" @click="isOpen = !isOpen">
            <X v-if="isOpen" class="size-4" />
            <Menu v-else class="size-4" />
          </Button>
        </div>
      </div>

      <div class="menu">
        <NavigationMenu>
          <NavigationMenuList class="flex-1 flex-col sm:flex-row">
            <NavigationMenuItem>
              <NavigationMenuTrigger class="!bg-transparent">
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
                        class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/50 to-brand-1100 p-6 no-underline outline-none focus:shadow-md"
                      >
                        <Home class="h-6 w-6" />
                        <div class="mb-2 mt-4 font-manrope text-lg font-medium">Арендодателям</div>
                        <p class="para-xs leading-tight text-muted-foreground">
                          Упростите процесс управления вашей недвижимостью
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
              <NavigationMenuTrigger class="!bg-transparent">
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
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" class="!bg-transparent">
                <router-link to="/pricing">
                  <p class="menu-link">Подписка</p>
                </router-link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" class="!bg-transparent">
                <router-link to="/faq">
                  <p class="menu-link">FAQ</p>
                </router-link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>

    <Transition name="menu">
      <div class="absolute left-0 right-0 top-full z-[5] w-full" v-show="isOpen">
        <div class="menu__mobile">
          <NavigationMenu class="block">
            <NavigationMenuList class="nav-list">
              <NavigationMenuItem>
                <NavigationMenuTrigger class="nav-trigger">
                  <p class="menu-link menu-link__mobile">Арендодателям</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent class="backdrop-blur-sm">
                  <ul
                    class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
                  >
                    <li class="row-span-3">
                      <NavigationMenuLink as-child>
                        <router-link
                          to="/landlords"
                          class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/50 to-brand-1100 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Home class="h-6 w-6" />
                          <div class="mb-2 mt-4 font-manrope text-lg font-medium">
                            Арендодателям
                          </div>
                          <p class="para-xs leading-tight text-muted-foreground">
                            Упростите процесс управления вашей недвижимостью
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
                <NavigationMenuTrigger class="nav-trigger">
                  <p class="menu-link menu-link__mobile">О проекте</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent class="backdrop-blur-sm">
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
                <NavigationMenuLink :class="navigationMenuTriggerStyle()" class="nav-trigger">
                  <router-link to="/pricing">
                    <p class="menu-link menu-link__mobile">Подписка</p>
                  </router-link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink :class="navigationMenuTriggerStyle()" class="nav-trigger">
                  <router-link to="/faq">
                    <p class="menu-link menu-link__mobile">FAQ</p>
                  </router-link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </Transition>
    <Transition name="overlay">
      <div
        v-show="isOpen"
        class="fixed inset-0 z-[4] bg-black bg-opacity-50"
        @click="closeMenu"
      ></div>
    </Transition>
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.5s;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
</style>
