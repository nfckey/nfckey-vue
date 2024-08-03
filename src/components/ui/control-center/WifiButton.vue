<script setup>
import { WifiOn, WifiOff } from '@/components/ui/icons'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  isActive: Boolean,
  isFlightModeActive: Boolean
})

const emit = defineEmits(['update:wifi'])

const toggleWifi = () => {
  emit('update:wifi', !props.isActive)
}
</script>

<template>
  <BaseButton
    :isActive="isActive"
    :isFlightModeActive="isFlightModeActive"
    @click="toggleWifi"
    aria-label="Wi-Fi"
  >
    <WifiOff v-show="!isActive" aria-hidden="true" />
    <WifiOn v-show="isActive" aria-hidden="true" />
  </BaseButton>
</template>
