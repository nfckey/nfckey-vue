<script setup>
const props = defineProps({
  title: { type: String, required: false },
  description: { type: String, required: false }
})
</script>

<template>
  <div class="advantages-item">
    <slot />
    <div class="advantages-item__content">
      <p class="advantages-item__title">{{ props.title }}</p>
      <p class="advantages-item__text" v-html="props.description"></p>
    </div>
  </div>
</template>
