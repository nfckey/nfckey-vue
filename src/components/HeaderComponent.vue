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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Home, Menu } from 'lucide-vue-next'
import LogoComponent from './ui/logo/LogoComponent.vue'

const route = useRoute()
const isOpen = ref(false)

watch(route, () => {
  isOpen.value = false
})

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
  <Sheet v-model:open="isOpen">
    <div class="fixed z-[5] flex w-[100vw] justify-center bg-transparent">
      <header class="header">
        <div class="flex w-[80vw] items-center justify-between md:w-max">
          <LogoComponent />
          <div class="md:hidden" id="menuBtn">
            <SheetTrigger>
              <Button variant="outline" size="icon">
                <Menu class="size-4" />
              </Button>
            </SheetTrigger>
          </div>
        </div>

        <SheetContent :side="'top'">
          <SheetHeader>
            <SheetTitle class="flex justify-center"><LogoComponent /></SheetTitle>
            <SheetDescription> </SheetDescription>
          </SheetHeader>
          <div class="flex items-center justify-center pt-6">
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
                            class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/50 to-brand-1100 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <Home class="h-6 w-6" />
                            <div class="mb-2 mt-4 font-manrope text-lg font-medium">
                              Арендодателям
                            </div>
                            <p class="font-inter text-sm leading-tight text-muted-foreground">
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
        </SheetContent>

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
    </div>
  </Sheet>
</template>
