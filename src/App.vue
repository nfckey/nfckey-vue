<script setup>
import Lenis from '@studio-freight/lenis'
import { onMounted } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false
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

    <main class="container">
      <router-view></router-view>
    </main>

    <!-- Footer -->
  </div>
</template>

<style scoped></style>
