<script setup>
import { BluetoothOn, BluetoothOff } from '@/components/ui/icons'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  isActive: Boolean,
  isFlightModeActive: Boolean
})

const emit = defineEmits(['update:bluetooth'])

const toggleBluetooth = () => {
  emit('update:bluetooth', !props.isActive)
}
</script>

<template>
  <BaseButton
    :isActive="isActive"
    :isFlightModeActive="isFlightModeActive"
    @click="toggleBluetooth"
    aria-label="Bluetooth"
  >
    <BluetoothOff v-show="!isActive" aria-hidden="true" />
    <BluetoothOn class="size-[29px]" v-show="isActive" aria-hidden="true" />
  </BaseButton>
</template>
