<script setup>
import { Cellular } from '@/components/ui/icons'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  isActive: Boolean,
  isFlightModeActive: Boolean
})

const emit = defineEmits(['update:cellular'])

const toggleCellular = () => {
  if (!props.isFlightModeActive) {
    emit('update:cellular', !props.isActive)
  }
}
</script>

<template>
  <BaseButton
    :class="{ active_cellular: isActive }"
    :isActive="isActive"
    :isFlightModeActive="isFlightModeActive"
    :disabled="isFlightModeActive"
    @click="toggleCellular"
    aria-label="Сотовая связь"
  >
    <Cellular
      :class="[isFlightModeActive ? 'text-[#828282]' : 'text-white', 'mt-1 size-9']"
      aria-hidden="true"
    />
  </BaseButton>
</template>
