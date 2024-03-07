<script setup>
import { Check } from 'lucide-vue-next'
</script>

<template>
  <div class="ops-card">
    <p class="ops-card__title">
      При покупке замка вы <span class="text-brand-400">навсегда</span> получаете универсальный
      набор возможностей
    </p>
    <div class="ops-card__bullet-points">
      <div class="bullet-point">
        <Check alt="Доступно" class="icon" />
        <p>Доступ для всей семьи</p>
      </div>
      <div class="bullet-point">
        <Check alt="Доступно" class="icon" />
        <p>Уведомления о событиях</p>
      </div>
      <div class="bullet-point">
        <Check alt="Доступно" class="icon" />
        <p>Журнал посещений</p>
      </div>
      <div class="bullet-point">
        <Check alt="Доступно" class="icon" />
        <p>Выдача гостевых пропусков</p>
      </div>
      <div class="bullet-point">
        <Check alt="Доступно" class="icon" />
        <p>Добавление администраторов</p>
      </div>
      <div class="bullet-point">
        <Check alt="Доступно" class="icon" />
        <p>Регулярные обновления</p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.ops-card {
  @apply flex max-w-2xl flex-col items-center justify-center gap-6 rounded-2xl border border-vneutral-1300 bg-white p-6 shadow-sm;

  &__title {
    @apply h200 self-center text-center font-semibold text-vneutral-50;
  }

  &__bullet-points {
    @apply flex flex-col flex-wrap items-start justify-center gap-x-8 gap-y-4 sm:flex-row;

    & .bullet-point {
      @apply flex items-start gap-2 sm:min-w-72;

      & .icon {
        @apply h-6 w-6 leading-6 text-brand-400;
      }

      & p {
        @apply para-sm font-medium leading-6 text-vneutral-200;
      }
    }
  }
}
</style>
