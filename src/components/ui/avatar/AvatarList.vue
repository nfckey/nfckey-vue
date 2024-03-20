<script setup>
import { AvatarListItem } from '@/components/ui/avatar'

defineProps({
  isContributors: {
    type: Boolean,
    default: false
  }
})

const team = [
  {
    name: 'Иван \nМеняйлов',
    role: 'Руководитель \nпроекта',
    imageUrl: 'team-ivan-menyailov.png',
    socials: [
      {
        name: 'VK',
        href: 'https://vk.com/ivanich557'
      },
      {
        name: 'Telegram',
        href: 'https://t.me/ivan_menyaylov'
      }
    ]
  },
  {
    name: 'Анастасия \nСеливерстова',
    role: 'Наставничество, \nреклама',
    imageUrl: 'team-anastasiya-seliverstova.png',
    socials: [
      {
        name: 'VK',
        href: 'https://vk.com/aismirnova'
      }
    ]
  },
  {
    name: 'Никита \nПодколзин',
    role: 'Android-\nразработчик',
    imageUrl: 'team-nikita-podkolzin.png',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/nfckey'
      }
    ]
  },
  {
    name: 'Сергей \nГребенкин',
    role: 'iOS-\nразработчик',
    imageUrl: 'team-sergey-grebenkin.png',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/R1zonS'
      },
      {
        name: 'Github',
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    name: 'Полина \nСычева',
    role: 'Графический \nдизайнер',
    imageUrl: 'team-polina-sycheva.png',
    socials: [
      {
        name: 'VK',
        href: 'https://vk.com/i.want.chips'
      },
      {
        name: 'Telegram',
        href: 'https://t.me/chipsulkin'
      },
      {
        name: 'Behance',
        href: 'https://www.behance.net/polinasycheva'
      }
    ]
  },
  {
    name: 'Михаил \nХворостянов',
    role: 'Инженер-\nконструктор',
    imageUrl: 'team-mihail-hvorostyanov.png',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/nfckey'
      }
    ]
  },
  {
    name: 'Наум-Леонид \nПопов',
    role: 'Специалист по \nIT-безопасности',
    imageUrl: 'team-naum-leonid-popov.png',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/N_LP0'
      },
      {
        name: 'Github',
        href: 'https://github.com/NLP-github'
      }
    ]
  },
  {
    name: 'Евгения \nВишневская',
    role: 'SMM-\nменеджер',
    imageUrl: 'team-evgeniya-vishnevskaya.png',
    socials: [
      {
        name: 'VK',
        href: 'https://vk.com/cherry1324'
      },
      {
        name: 'Telegram',
        href: 'https://t.me/odaliacherry'
      }
    ]
  }
]

const contributors = [
  {
    name: 'Максим \nЧувилин',
    role: 'Инженер, \nпрограммист',
    imageUrl: 'team-masksim-chuvilin.png',
    socials: []
  },
  {
    name: 'Николай \nБелявский',
    role: 'Инженер, \nSMM-менеджер',
    imageUrl: 'team-nikolay-belyavskiy.png',
    socials: []
  }
]
</script>

<template>
  <div class="flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-12">
    <AvatarListItem
      v-for="(item, index) in isContributors ? contributors : team"
      :key="index"
      :person="item"
    />
  </div>
</template>
