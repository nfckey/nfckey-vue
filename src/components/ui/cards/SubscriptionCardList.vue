<script setup>
import { ref } from 'vue'

import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import SubscriptionCardLimit from './SubscriptionCardLimit.vue'

const props = defineProps({
  items: Array,
  includeFree: {
    type: Boolean,
    default: false
  }
})

const isAnnual = ref(true)

const handleSwitch = () => {
  isAnnual.value = !isAnnual.value
}

const formatPrice = (price) =>
  parseInt(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'

const itemRefs = ref([])

const handleCardsGlow = (e) => {
  if (!itemRefs.value) return

  itemRefs.value.forEach((card) => {
    const rect = card.getBoundingClientRect()

    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  })
}

const handleCardsFadeIn = () => {
  if (!itemRefs.value) return

  itemRefs.value.forEach((card) => {
    let alpha = 0

    const fadeInInterval = setInterval(() => {
      alpha += 0.01
      card.style.setProperty('--alpha', alpha)
      if (alpha >= 0.294) {
        clearInterval(fadeInInterval)
      }
    }, 10)
  })
}

const handleCardsFadeOut = () => {
  if (!itemRefs.value) return

  itemRefs.value.forEach((card) => {
    let alpha = 0.294

    const fadeOutInterval = setInterval(() => {
      alpha -= 0.01
      card.style.setProperty('--alpha', alpha)
      if (alpha <= 0) {
        clearInterval(fadeOutInterval)
      }
    }, 10)
  })
}

const getColorClass = (index) => {
  const colors = ['gray', 'light', 'green', 'gold']
  return props.includeFree && index == 0 ? colors[index] : colors[index++]
}
</script>

<template>
  <div class="flex items-center gap-1" @click="handleSwitch">
    <p class="cursor-pointer select-none text-xs text-vneutral-400">Годовая скидка</p>
    <Switch
      class="pricing-switch"
      :checked="isAnnual"
      @update:checked="handleSwitch"
      @click="handleSwitch"
    />
  </div>
  <div
    class="flex flex-wrap items-start justify-center gap-8"
    @mousemove="handleCardsGlow"
    @mouseenter="handleCardsFadeIn"
    @mouseleave="handleCardsFadeOut"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      ref="itemRefs"
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
          </p>
          <div v-if="item.type != 'Универсальная'" class="flex flex-col">
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
