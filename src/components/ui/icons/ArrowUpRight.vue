<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, required: false }
})
</script>

<template>
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="cn('lucide', props.class)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M31.9565 10.0435L10.0435 31.9565" />
    <path d="M17.3478 10.0435H31.9565V24.6522" />
  </svg>
</template>
