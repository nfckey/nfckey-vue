<script setup>
import { ref } from 'vue'

import { Badge } from '@/components/ui/badge'
import SubscriptionCardLimit from './SubscriptionCardLimit.vue'

defineProps({
  items: Array
})

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
  <div class="flex flex-wrap items-center justify-center gap-8">
    <div
      v-for="(item, index) in items"
      :key="index"
      ref="itemRefs"
      @mousemove="updateMousePosition($event, index)"
      :class="`sub-card sub-card_${getColorClass(index)}`"
    >
      <div class="sub-card__head">
        <p class="sub-card__title">{{ item.name }}</p>
        <Badge variant="secondary" :class="`badge badge_${getColorClass(index)}`">
          {{ item.alt_name }}
        </Badge>
        <p class="sub-card__price">
          {{ parseInt(item.price) }} ₽ <span class="sub-card__price-period">/ месяц</span>
        </p>
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
