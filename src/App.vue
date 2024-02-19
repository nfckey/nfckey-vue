<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="container min-h-screen bg-white">
    <HeaderComponent />

    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
  </div>
</template>

<style scoped></style>
