<script setup>
import Lenis from '@studio-freight/lenis'
import { onMounted } from 'vue'

import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

onMounted(() => {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    touchMultiplier: 2
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderComponent />

    <main class="container min-h-screen">
      <router-view></router-view>
    </main>

    <FooterComponent />
  </div>
</template>

<style scoped></style>
