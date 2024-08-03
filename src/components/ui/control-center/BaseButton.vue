<script setup>
import { defineProps, defineEmits } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  isActive: Boolean,
  isFlightModeActive: Boolean,
  class: { type: null, required: false }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.isDisabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    :class="cn(['control-button', { active: isActive }], props.class)"
    @click="handleClick"
    :aria-pressed="isActive"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.control-button {
  @apply flex size-16 items-center justify-center rounded-full bg-[#1c1c1e]/30 backdrop-blur-md transition-colors duration-300;

  &.active {
    @apply bg-[#007bff] text-white;

    &_cellular {
      @apply bg-[#34c759];
    }

    &_flight {
      @apply bg-[#ff9500];
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
