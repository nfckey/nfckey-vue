<script setup>
import { ChevronRight, Bell } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { gsap } from 'gsap'
import { ref, onMounted } from 'vue'
import heroImg100 from '../assets/hero-o100.png'
import heroImg50 from '../assets/hero-o50.png'

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
</script>

<template>
  <section class="hero">
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
            <p class="h100-20-semibold">Будьте в числе первых</p>
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
  <!-- <section>
    <div class="flex flex-col items-center gap-24">
      <div class="subtitle_ca">
        <h1 class="subtitle_ca__title subtitle_ca__title_gradient">Узнайте больше об NFCKEY</h1>
        <p class="subtitle_ca__text">
          Изучите раздел с часто задаваемыми вопросами и узнайте, как NFCKEY может органично
          вписаться в ваш образ жизни
        </p>
      </div>
    </div>
  </section> -->
</template>
