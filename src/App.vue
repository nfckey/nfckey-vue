<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
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
