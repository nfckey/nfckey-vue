<script setup>
import { FlightMode } from '@/components/ui/icons'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  isActive: Boolean
})

const emit = defineEmits(['update:flightMode'])

const toggleFlightMode = () => {
  emit('update:flightMode', !props.isActive)
}
</script>

<template>
  <BaseButton
    :class="{ active_flight: isActive }"
    :isActive="isActive"
    @click="toggleFlightMode"
    aria-label="Режим полета"
  >
    <FlightMode aria-hidden="true" />
  </BaseButton>
</template>
