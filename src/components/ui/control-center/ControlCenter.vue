<script setup>
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import FlightModeButton from './FlightModeButton.vue'
import WifiButton from './WifiButton.vue'
import BluetoothButton from './BluetoothButton.vue'
import CellularButton from './CellularButton.vue'

const props = defineProps({
  isActive: Boolean,
  isFlightModeActive: Boolean,
  class: { type: null, required: false }
})

const isFlightModeActive = ref(true)
const isWifiActive = ref(false)
const isBluetoothActive = ref(false)
const isCellularActive = ref(false)

const previousStates = {
  wifi: isWifiActive.value,
  bluetooth: isBluetoothActive.value,
  cellular: isCellularActive.value
}

const toggleFlightMode = (newState) => {
  isFlightModeActive.value = newState

  if (newState) {
    previousStates.wifi = isWifiActive.value
    previousStates.bluetooth = isBluetoothActive.value
    previousStates.cellular = isCellularActive.value

    isWifiActive.value = false
    isBluetoothActive.value = false
    isCellularActive.value = false
  } else {
    isWifiActive.value = previousStates.wifi
    isBluetoothActive.value = previousStates.bluetooth
    isCellularActive.value = previousStates.cellular
  }
}
</script>

<template>
  <div :class="cn('flex flex-nowrap justify-center gap-3', props.class)">
    <FlightModeButton :isActive="isFlightModeActive" @update:flightMode="toggleFlightMode" />
    <CellularButton
      :isActive="isCellularActive"
      :isFlightModeActive="isFlightModeActive"
      @update:cellular="isCellularActive = $event"
    />
    <WifiButton
      :isActive="isWifiActive"
      :isFlightModeActive="isFlightModeActive"
      @update:wifi="isWifiActive = $event"
    />
    <BluetoothButton
      :isActive="isBluetoothActive"
      :isFlightModeActive="isFlightModeActive"
      @update:bluetooth="isBluetoothActive = $event"
    />
  </div>
</template>
