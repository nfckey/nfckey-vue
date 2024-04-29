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
    imageUrl: 'team-ivan-menyailov.webp',
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
    role: 'Наставник, \n специалист по рекламе',
    imageUrl: 'team-anastasiya-seliverstova.webp',
    socials: [
      {
        name: 'VK',
        href: 'https://vk.com/selive.strategy'
      }
    ]
  },
  {
    name: 'Полина \nСычева',
    role: 'Графический \nдизайнер',
    imageUrl: 'team-polina-sycheva.webp',
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
    name: 'Евгения \nВишневская',
    role: 'SMM-\nменеджер',
    imageUrl: 'team-evgeniya-vishnevskaya.webp',
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
  },
  {
    name: 'Савелий \nКарпухин',
    role: 'Ведущий\nинженер',
    imageUrl: 'team-saveliy-karpukhin.webp',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/msc_15'
      },
      {
        name: 'Github',
        href: 'https://github.com/savukhin'
      }
    ]
  },
  {
    name: 'Александр \nКовшик',
    role: 'Веб-\nразработчик',
    imageUrl: 'team-aleksandr-kovshik.webp',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/mercuuury'
      },
      {
        name: 'Github',
        href: 'https://github.com/Mercuuury/'
      }
    ]
  },
  {
    name: 'Никита \nПодколзин',
    role: 'Android-\nразработчик',
    imageUrl: 'team-nikita-podkolzin.webp',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/nfckey'
      },
      {
        name: 'Github',
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  {
    name: 'Сергей \nГребенкин',
    role: 'Старший iOS-\nразработчик',
    imageUrl: 'team-sergey-grebenkin.webp',
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
    name: 'Андрей \nКаретников',
    role: 'Младший iOS-\nразработчик',
    imageUrl: 'team-andrey-karetnikov.webp',
    socials: [
      {
        name: 'Telegram',
        href: 'https://t.me/iconyami'
      },
      {
        name: 'Github',
        href: 'https://github.com/noychus'
      }
    ]
  }
]

const contributors = [
  {
    name: 'Максим \nЧувилин',
    role: 'Инженер, \nпрограммист',
    imageUrl: 'team-masksim-chuvilin.webp',
    socials: []
  },
  {
    name: 'Николай \nБелявский',
    role: 'Инженер, \nSMM-менеджер',
    imageUrl: 'team-nikolay-belyavskiy.webp',
    socials: []
  },
  {
    name: 'Наум-Леонид \nПопов',
    role: 'Специалист по \nIT-безопасности',
    imageUrl: 'team-naum-leonid-popov.webp',
    socials: []
  }
]
</script>

<template>
  <div class="flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-12">
    <AvatarListItem
      v-for="(item, index) in isContributors ? contributors : team"
      :key="index"
      :person="item"
    />
  </div>
</template>
