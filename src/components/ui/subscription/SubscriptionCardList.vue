<script setup>
import { ref, watch } from 'vue'

import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import SubscriptionCardLimit from './SubscriptionCardLimit.vue'

const props = defineProps({
  items: Array,
  includeFree: {
    type: Boolean,
    default: false
  },
  includeWarranty: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['priceSwitched'])

const isAnnual = ref(true)

const handleSwitch = () => {
  isAnnual.value = !isAnnual.value
  emit('priceSwitched', isAnnual.value)
}

const formatPrice = (price) =>
  parseInt(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'

const itemRefs = ref([])

watch(
  () => props.items,
  () => {
    itemRefs.value = []
  }
)

const handleCardsGlow = (e) => {
  if (!itemRefs.value) return

  itemRefs.value.forEach((card) => {
    if (!card) return
    const rect = card.getBoundingClientRect()

    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  })
}

const handleCardsFadeIn = () => {
  if (!itemRefs.value) return

  itemRefs.value.forEach((card) => {
    if (!card) return
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
    if (!card) return
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
  const colors = ['light', 'green', 'gold', 'purple']
  const includeFreeColors = ['gray', 'light', 'green', 'gold', 'purple']

  return props.includeFree ? includeFreeColors[index] : colors[index]
}

const warrantyCard = {
  name: 'Расширенная гарантия',
  altName: 'LockProtect+',
  description: 'Исключительная забота о надежности ваших умных замков',
  price: '349 ₽',
  features: [
    {
      name: 'Бесплатный ремонт',
      is_previewable: true,
      is_available: true
    },
    {
      name: 'Возможность замены замка',
      is_previewable: true,
      is_available: true
    },
    {
      name: 'Сервисное обслуживание',
      is_previewable: true,
      is_available: true
    },
    {
      name: 'Обновление прошивки',
      is_previewable: true,
      is_available: true
    },
    {
      name: 'Аудиты безопасности',
      is_previewable: true,
      is_available: true
    },
    {
      name: 'Приоритетная поддержка',
      is_previewable: true,
      is_available: true
    }
  ]
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
      :ref="(el) => itemRefs.push(el)"
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
          <div
            v-if="item.type !== 'Универсальная' && item.alt_name !== 'Endless'"
            class="flex flex-col"
          >
            <p class="sub-card__price-period">в месяц</p>
            <p class="sub-card__price-period">оплата {{ isAnnual ? 'ежегодно' : 'ежемесячно' }}</p>
          </div>
          <div v-if="item.alt_name === 'Endless'" class="flex flex-col">
            <p class="sub-card__price-period">единоразовый платеж</p>
          </div>
        </div>
      </div>
      <div :class="`sub-card__delimiter sub-card__delimiter_${getColorClass(index)}`"></div>
      <div class="bullet-points">
        <SubscriptionCardLimit
          v-for="(limit, idx) in item.limits"
          :key="idx"
          :limit="limit"
          :color="getColorClass(index)"
        />
      </div>
    </div>
    <div v-if="includeWarranty" :ref="(el) => itemRefs.push(el)" class="sub-card sub-card_red">
      <div class="sub-card__head">
        <Badge variant="secondary" class="badge badge_red">
          {{ warrantyCard.altName }}
        </Badge>
        <p class="sub-card__title" :class="{ 'h100 leading-8': warrantyCard.name.length > 16 }">
          {{ warrantyCard.name }}
        </p>
        <p class="sub-card__text">
          {{ warrantyCard.description }}
        </p>
        <div class="flex items-center gap-2">
          <p class="sub-card__price">
            {{ warrantyCard.price }}
          </p>
          <div class="flex flex-col">
            <p class="sub-card__price-period">за замок в месяц</p>
            <p class="sub-card__price-period">оплата ежемесячно</p>
          </div>
        </div>
      </div>
      <div class="sub-card__delimiter sub-card__delimiter_red"></div>
      <div class="bullet-points">
        <SubscriptionCardLimit
          v-for="(feature, index) in warrantyCard.features"
          :key="index"
          :limit="feature"
          :color="'red'"
        />
      </div>
    </div>
  </div>
</template>
