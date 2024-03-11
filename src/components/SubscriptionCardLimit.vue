<script setup>
import { Check, X } from 'lucide-vue-next'

defineProps({
  limit: Object,
  color: String
})
</script>

<template>
  <div class="bullet-points__item" v-if="limit.is_previewable">
    <template v-if="limit.value">
      <p :class="`bullet-points__item__icon bullet-points__item__icon_${color}`">
        {{ limit.value }}
      </p>
    </template>
    <template v-else-if="limit.is_available">
      <Check
        :class="`bullet-points__item__icon bullet-points__item__icon_${color}`"
        alt="Доступно"
      />
    </template>
    <template v-else>
      <X class="bullet-points__item__icon" alt="Недоступно" />
    </template>
    <p class="bullet-points__item__text">{{ limit.name }}</p>
  </div>
</template>
