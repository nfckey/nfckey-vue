<script setup>
import { AvatarList } from '@/components/ui/avatar'
import { PublishingList } from '@/components/ui/publishing'
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
  <section id="publishing" class="min-h-max">
    <div class="flex flex-col items-center gap-16">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient bg-gradient-to-r">
          Узнайте о нас больше
        </h2>
        <p class="subtitle_ca__text">
          Приглашаем ознакомиться с нашими эксклюзивными публикациями на других ресурсах
        </p>
      </div>
      <PublishingList />
    </div>
  </section>
</template>
