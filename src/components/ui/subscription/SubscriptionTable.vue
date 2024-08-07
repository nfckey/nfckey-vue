<script setup>
import { Badge } from '@/components/ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Check } from 'lucide-vue-next'

defineProps({
  items: Array,
  limits: Array,
  isAnnual: Boolean
})

const getColorClass = (index) => {
  const colors = ['gray', 'light', 'green', 'gold', 'purple']
  return colors[index]
}

const filterLimits = (limitsArr, itemsArr) => {
  const limitsIds = new Set(
    itemsArr.flatMap((item) => item.limits.map((limit) => (limit.is_available ? limit.id : null)))
  )

  return limitsArr.filter((limit) => limitsIds.has(limit.id))
}

const formatPrice = (price) =>
  parseInt(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="comparison-header comparison-header_sticky">
      <div class="flex w-full items-center justify-start xl:w-72">
        <p class="h100 font-medium text-vneutral-50">Сравнение тарифов</p>
      </div>
      <div
        class="flex w-full flex-shrink flex-nowrap justify-start gap-x-3 gap-y-6 xl:w-[calc(100%-18rem)]"
      >
        <div class="comparison-header-item" v-for="(item, index) in items" :key="index">
          <Badge variant="secondary" :class="`badge badge_${getColorClass(index)}`">
            {{ item.alt_name }}
          </Badge>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="comparison-row" v-for="(limit, index) in filterLimits(limits, items)" :key="index">
      <div class="comparison-row__head">
        <Popover>
          <PopoverTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div class="flex flex-nowrap items-center gap-1">
                    <p>{{ limit.name }}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-help size-4 text-vneutral-400"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                </TooltipTrigger>
                <TooltipContent class="w-dvw sm:w-96">
                  <p class="para-xs">{{ limit.description }}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </PopoverTrigger>
          <PopoverContent class="w-dvw sm:w-96">
            <p class="para-xs">{{ limit.description }}</p>
          </PopoverContent>
        </Popover>
      </div>
      <div class="comparison-row__value" v-for="(item, idx) in items" :key="idx">
        <Check v-if="item.limits[limit.id - 1].is_available" />
        <p>{{ item.limits[limit.id - 1].value }}</p>
      </div>
    </div>
    <div class="comparison-footer border-t-0">
      <div class="flex w-full items-center justify-start xl:w-72">
        <p class="h100 font-medium text-vneutral-50">Стоимость</p>
      </div>
      <div
        class="flex w-full flex-shrink flex-nowrap justify-start gap-x-3 gap-y-6 xl:w-[calc(100%-18rem)]"
      >
        <div class="comparison-footer-item" v-for="(item, index) in items" :key="index">
          <div class="flex flex-wrap items-center gap-2 lg:flex-nowrap">
            <p class="sub-card__price h100 sm:h200">
              {{ formatPrice(isAnnual ? item.annual_price : item.price) }}
            </p>
            <div
              v-if="item.type !== 'Универсальная' && item.alt_name !== 'Endless'"
              class="flex flex-col"
            >
              <p class="sub-card__price-period">в месяц</p>
              <p class="sub-card__price-period">
                оплата {{ isAnnual ? 'ежегодно' : 'ежемесячно' }}
              </p>
            </div>
            <div v-if="item.alt_name === 'Endless'" class="flex flex-col">
              <p class="sub-card__price-period">единоразовый платеж</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
