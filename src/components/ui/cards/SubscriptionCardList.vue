<script setup>
import { ref } from 'vue'

import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import SubscriptionCardLimit from './SubscriptionCardLimit.vue'

defineProps({
  items: Array
})

const isAnnual = ref(true)

const handleChange = () => {
  isAnnual.value = !isAnnual.value
}

const formatPrice = (price) =>
  parseInt(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const itemRefs = ref([])

const updateMousePosition = (event, index) => {
  if (!itemRefs.value) return

  const { layerX, layerY } = event
  itemRefs.value[index].style.setProperty('--x', `${layerX}px`)
  itemRefs.value[index].style.setProperty('--y', `${layerY}px`)
  itemRefs.value[index].style.setProperty('--gradient-color', getColorClass(index))
}

const getColorClass = (index) => {
  const colors = ['light', 'green', 'gold']
  return colors[index] || 'light'
}
</script>

<template>
  <div class="flex items-center gap-1" @click="handleChange">
    <p class="cursor-pointer select-none text-xs text-vneutral-400">Годовая скидка</p>
    <Switch
      class="pricing-switch"
      :checked="isAnnual"
      @update:checked="handleChange"
      @click="handleChange"
    />
  </div>
  <div class="flex flex-wrap items-center justify-center gap-8">
    <div
      v-for="(item, index) in items"
      :key="index"
      ref="itemRefs"
      @mousemove="updateMousePosition($event, index)"
      :class="`sub-card sub-card_${getColorClass(index)}`"
    >
      <div class="sub-card__head">
        <Badge variant="secondary" :class="`badge badge_${getColorClass(index)}`">
          {{ item.alt_name }}
        </Badge>
        <p class="sub-card__title" :class="{ 'h100 leading-8': item.name.length > 16 }">
          {{ item.name }}
        </p>
        <p class="sub-card__text">
          {{ item.description }}
        </p>
        <div class="flex items-center gap-2">
          <p class="sub-card__price">
            {{ formatPrice(isAnnual ? item.annual_price : item.price) }}
            ₽
          </p>
          <div class="flex flex-col">
            <p class="sub-card__price-period">в месяц</p>
            <p class="sub-card__price-period">оплата {{ isAnnual ? 'ежегодно' : 'ежемесячно' }}</p>
          </div>
        </div>
      </div>
      <div :class="`sub-card__delimiter sub-card__delimiter_${getColorClass(index)}`"></div>
      <div :class="`bullet-points`">
        <SubscriptionCardLimit
          v-for="(limit, idx) in item.limits"
          :key="idx"
          :limit="limit"
          :color="getColorClass(index)"
        />
      </div>
    </div>
  </div>
</template>
