<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false }
})
</script>

<template>
  <div :class="cn('flex flex-wrap items-center justify-between gap-8', props.class)">
    <slot />
  </div>
</template>
