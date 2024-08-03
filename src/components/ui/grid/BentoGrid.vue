<script setup>
import { ArrowUpRight, Home, Lock, Sparkles } from '@/components/ui/icons'
import { ControlCenter } from '@/components/ui/control-center'
import DotGrid from './DotGrid.vue'
</script>

<template>
  <div class="grid w-full justify-center gap-8">
    <div class="card card_nfc col-span-1 md:col-span-2 md:row-span-1">
      <div class="card__content">
        <p class="card__title">Технология NFC</p>
        <p class="card__text text-balance">
          Попрощайтесь с поиском ключей&nbsp;– телефон позволит мгновенно получить доступ к
          помещению.
        </p>
      </div>
    </div>
    <div class="card card_invitations col-span-1 row-span-1">
      <div class="card__content">
        <p class="card__title">Управление доступом</p>
        <p class="card__text text-balance">
          Приглашайте членов семьи и гостей дистанционно, настраивая их роль и период доступа через
          приложение.
        </p>
      </div>
    </div>
    <div class="card card_notifications col-span-1 row-span-1">
      <div class="card__content">
        <p class="card__title">Журнал событий</p>
        <p class="card__text text-pretty">
          Получайте уведомления о действиях пользователей, состоянии замка и других системных
          событиях.
        </p>
      </div>
    </div>
    <div class="card card_crossplatform col-span-1 row-span-1 md:col-span-2">
      <div class="card__content">
        <p class="card__title">Кроссплатформенность</p>
        <p class="card__text text-pretty">
          Мобильное приложение NFCKEY доступно на
          <span class="xs-hidden">всех современных</span> смартфонах Android и iOS с поддержкой NFC.
        </p>
      </div>
    </div>
    <div class="card col-span-1 xl:row-span-2">
      <div class="card__content h-full">
        <div class="flex h-full items-center justify-center">
          <ControlCenter />
        </div>
        <p class="card__title">Автономная работа</p>
        <p class="card__text text-balance">
          Для открытия замка не требуется интернет-соединение или наличие центра управления умным
          домом.
        </p>
      </div>
    </div>

    <div class="card col-span-1 overflow-hidden xl:row-span-2">
      <div class="card__content relative h-full">
        <div class="flex h-full items-center justify-center">
          <DotGrid class="absolute -top-20" />
          <div class="card_security__icon">
            <Lock class="size-16 text-vneutral-100" />
          </div>
        </div>
        <p class="card__title z-[1]">Безопасность</p>
        <p class="card__text z-[1] text-pretty">
          Мы заботимся о сохранности вашего помещения, реализуя современные механизмы и технологии
          защиты.
        </p>
        <img
          src="@/assets/images/bento-blur.webp"
          class="card_security__blur"
          alt=""
          role="presentation"
        />
      </div>
    </div>

    <router-link to="/pricing">
      <div class="card card_link col-span-1 row-span-1">
        <ArrowUpRight class="card__icon card__icon_arrow" aria-hidden="true" />
        <div class="card__content">
          <Sparkles class="card__icon" aria-label="Иконка со звёздами" />
          <p class="card__title">Премиум возможности</p>
          <p class="card__text text-balance">
            Выберите преимущества под ваши уникальные потребности.
          </p>
        </div>
      </div>
    </router-link>

    <router-link to="/landlords">
      <div class="card card_link col-span-1 row-span-1">
        <ArrowUpRight class="card__icon card__icon_arrow" aria-hidden="true" />
        <div class="card__content">
          <Home class="card__icon size-10 stroke-[1.5]" aria-label="Иконка дома" />
          <p class="card__title">Арендодателям</p>
          <p class="card__text card__text_sm text-balance">
            Уникальные решения для управления вашей недвижимостью.
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  @apply flex items-end p-8;
  @apply rounded-2xl border-[1px] border-vneutral-1200 bg-white shadow-md;

  &__icon {
    @apply text-vneutral-50 transition-all duration-300;

    &_arrow {
      @apply absolute right-4 top-4;
    }
  }

  &__content {
    @apply flex max-w-96 flex-col gap-4;
  }

  &__title {
    @apply h200 font-semibold text-vneutral-50;
  }

  &__text {
    @apply md:para-md para-sm text-vneutral-400;

    &_sm {
      @media (max-width: 418.98px) {
        font-size: 0.95rem;
      }
    }
  }

  &_link {
    @apply relative transition-shadow hover:!shadow-brand-1000;

    &:hover .card__icon {
      @apply text-brand-400;
    }
  }

  &_nfc {
    background: url(@/assets/images/bento-nfc.webp) no-repeat 12rem 0 / cover;

    @media (max-width: 767.98px) {
      background:
        url(@/assets/images/bento-blur.webp) no-repeat center bottom / 100%,
        url(@/assets/images/bento-nfc.webp) no-repeat center / cover;
    }
  }

  &_invitations {
    background: url(@/assets/images/bento-invitations.webp) no-repeat 2rem 15% / contain;
  }

  &_notifications {
    background: url(@/assets/images/bento-notifications.webp) no-repeat center 20% / 85%;
  }

  &_crossplatform {
    background: url(@/assets/images/bento-crossplatform.webp) no-repeat right 1rem / 50%;

    @media (max-width: 859.98px) {
      background-position: right 6rem;
      background-size: 43%;
    }

    @media (max-width: 767.98px) {
      background:
        url(@/assets/images/bento-blur.webp) no-repeat center bottom / 100%,
        url(@/assets/images/bento-crossplatform.webp) no-repeat center 1rem / contain;
    }

    @media (max-width: 469.98px) {
      background-size: 115%, contain;
    }
  }

  &_security {
    &__blur {
      @apply absolute -bottom-8 z-[0] -ml-8 max-w-none;
      user-drag: none;
      user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    &__icon {
      @apply flex h-32 w-32 items-center justify-center rounded-[1.5rem] bg-white/5 backdrop-blur-sm;
      box-shadow: 12px 12px 40px rgba(0, 0, 0, 0.25);
    }
  }
}

.xs-hidden {
  @media (max-width: 469.98px) {
    display: none;
  }
}

.grid {
  grid-template-columns: repeat(3, minmax(0, 424px));
  grid-template-rows: repeat(2, 496px) repeat(2, 232px);
}

@media (max-width: 1279.98px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 424px));
    grid-template-rows: repeat(4, 496px) 232px;
  }
}

@media (max-width: 767.98px) {
  .grid {
    grid-template-columns: minmax(0, 424px);
    grid-template-rows: repeat(6, 496px) repeat(2, 232px);
  }
}
</style>
