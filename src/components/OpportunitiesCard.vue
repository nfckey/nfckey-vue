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
