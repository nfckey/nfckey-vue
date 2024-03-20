<script setup>
import { AvatarList } from '@/components/ui/avatar'
</script>
<template>
  <section id="about-team">
    <div class="flex flex-col items-center gap-24">
      <div class="flex max-w-4xl flex-col items-center gap-8">
        <img src="../assets/logo-large.svg" alt="Логотип NFCKEY" />
        <p class="about-team__title_main">
          NFCKEY – команда энтузиастов, стремящаяся стать первым серьезным конкурентом среди
          российских производителей умных замков
        </p>
      </div>
      <AvatarList />
      <div class="flex flex-col items-center gap-8">
        <p class="about-team__title_contributors">
          Выражаем отдельную благодарность за участие в развитии проекта
        </p>
        <AvatarList is-contributors />
      </div>
    </div>
  </section>
</template>
