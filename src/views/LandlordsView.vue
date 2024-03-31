<script setup>
import axios from 'axios'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { nextTick, onMounted, ref, watch } from 'vue'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { OpportunitiesCard, SubscriptionCardList } from '@/components/ui/cards'
import { ArrowRight, Clock4, Heart, Shield, Sparkles, Users } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const cardsRef = ref([])

const handleCardsGlow = (e) => {
  cardsRef.value.forEach((card) => {
    const rect = card.getBoundingClientRect()

    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  })
}

const animateOnScroll = (trigger, elements, options, triggerPos) => {
  gsap.from(trigger + ' ' + elements, {
    ...options,
    scrollTrigger: {
      trigger: trigger,
      start: triggerPos ? `${triggerPos} center` : 'top center',
      end: triggerPos ? `${triggerPos} center` : 'top center'
    }
  })
}

const initializeStoryline = () => {
  const content = gsap.utils.toArray('.feature:not(:first-child)')
  const imageGroups = gsap.utils.toArray('.features-images__group:not(:first-child)')

  gsap.set(content, { yPercent: 101, opacity: 0 })

  let mm = gsap.matchMedia()

  mm.add('(min-width: 767.98px)', () => {
    ScrollTrigger.create({
      trigger: '.features-right',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.features-left'
    })
  })

  imageGroups.forEach((group, index) => {
    ScrollTrigger.create({
      trigger: group,
      start: 'top 80%',
      end: 'top 10%',
      animation: gsap.to(content[index], { yPercent: 0, opacity: 1 }),
      scrub: true
    })
  })
}

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.hero_ll .subtitle_ca', { opacity: 0, duration: 1 }, 0.5).from(
    '#advantages .advantages-card',
    { opacity: 0, stagger: 0.3 },
    1
  )

  initializeStoryline()

  animateOnScroll('#steps', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#steps', '.steps-item', { opacity: 0, x: -50, stagger: 0.7 })
  animateOnScroll('#faq', '.subtitle_la', { opacity: 0, x: -50, duration: 1 }, '-30%')
  animateOnScroll('#faq', '.faq-list div', { opacity: 0, x: -50, stagger: 0.1 })
})

const subscriptions = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://api.nfckey.tech/api/v1/subscriptions?type=Арендодателям&limits=true'
    )
    subscriptions.value = data
  } catch (error) {
    console.log(error)
  }
})

watch(subscriptions, () => {
  nextTick(() => {
    animateOnScroll('#subscription', '.sub-card', {
      opacity: 0,
      y: -50,
      stagger: 0.5,
      duration: 0.7
    })
  })
})

const faqItems = [
  {
    value: 'item-1',
    title: 'Как NFCKEY упрощает процесс заселения и выселения для моих гостей?',
    content:
      '<p>NFCKEY позволяет отправлять гостям защищенные цифровые ключи через наше мобильное приложение. Гости получают доступ к квартире с помощью своих смартфонов. Все происходит дистанционно.</p><br><p>Вы самостоятельно настраиваете время действия ключа и можете менять время заселения и отъезда гостей.</p>'
  },
  {
    value: 'item-2',
    title: 'Могу ли я удаленно контролировать доступ к своей недвижимости?',
    content:
      'Да, можете! NFCKEY предоставляет журналы доступа в режиме реального времени. Вы всегда сможете знать, кто имеет доступ и когда им в последний раз пользовался. Кроме того, с помощью мобильного приложения вы сможете удаленно блокировать доступ пользователям, обеспечивая безопасность и удобство из любого места.'
  },
  {
    value: 'item-3',
    title: 'Могу ли я управлять арендой сразу нескольких объектов недвижимости?',
    content:
      'Да, вы можете управлять несколькими объектами недвижимости используя одну учетную запись. Мобильное приложение позволяет легко добавлять или удалять замки по мере необходимости.'
  },
  {
    value: 'item-4',
    title: 'Как мне начать пользоваться NFCKEY в роли арендодателя?',
    content:
      'Начать работу с NFCKEY очень просто! После приобретения замка и его активации в приложении, изучите варианты подписки из категории "Арендодателям" и выберите для себя тарифный план, который соответствует вашим потребностям.'
  }
]
</script>

<template>
  <section class="hero_ll">
    <div class="flex flex-col items-center justify-center">
      <div class="subtitle_ca">
        <p class="subtitle_ca__subheading subtitle_ca__title_gradient bg-gradient-to-r">
          NFCKEY для арендодателей
        </p>
        <h1 class="subtitle_ca__title subtitle_ca__title_gradient h500 sm:h600">
          Управляйте вашей недвижимостью с NFCKEY
        </h1>
        <p class="subtitle_ca__text">
          Теперь не нужно никуда ехать, чтобы передать ключ от квартиры. Просто нажмите кнопку
        </p>
      </div>
    </div>
  </section>
  <section id="advantages" class="advantages_ll" @mousemove="handleCardsGlow">
    <div class="flex flex-col items-center justify-center gap-8">
      <div class="advantages-cards">
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Users class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Управление доступом</p>
            <p class="advantages-card__text">
              Управляйте доступом жильцов и обслуживающего персонала, не выходя из телефона. Вам
              больше не придется беспокоиться о координации действий
            </p>
          </div>
        </div>
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Clock4 class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Экономия времени</p>
            <p class="advantages-card__text">
              Не тратьте время на дорогу, обслуживание и встречи. Впустить арендатора в квартиру
              можно нажав одну кнопку, в точности как и отозвать цифровой ключ
            </p>
          </div>
        </div>
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Shield class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Повышенная безопасность</p>
            <p class="advantages-card__text">
              Ваши данные и доступ в квартиру обеспечены самыми современными уровнями безопасности.
              Только вы – хозяин доступа в квартиру.
            </p>
          </div>
        </div>
        <div class="advantages-card" :ref="(el) => cardsRef.push(el)">
          <div class="advantages-card__content">
            <div class="icon_big">
              <Heart class="text-brand-400" />
            </div>
            <p class="advantages-card__title">Удовлетворенность гостей</p>
            <p class="advantages-card__text">
              Удобный и быстрый процесс регистрации привлечет больше людей, гарантируя положительные
              отзывы и высокую вероятность повторного бронирования
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="features">
    <div class="flex w-full flex-col items-center">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient">
          Выделяйтесь среди других арендодателей
        </h2>
        <p class="subtitle_ca__text">
          NFCKEY предлагает ряд ключевых функций, призванных сделать вашу роль арендодателя более
          эффективной и безопасной
        </p>
      </div>
      <div class="flex w-full justify-evenly">
        <div class="features-left">
          <div class="features-left__content">
            <div class="features__list">
              <div class="feature">
                <Sparkles class="shrink-0 text-brand-400" />
                <div class="feature__content">
                  <p class="feature__title">Удаленное управление доступом</p>
                  <p class="feature__text">
                    Вы можете управлять доступом из любой точки мира. Не нужно присутствовать лично
                    – просто выдайте или отмените доступ несколькими нажатиями.
                  </p>
                </div>
              </div>
              <div class="feature">
                <Sparkles class="shrink-0 text-brand-400" />
                <div class="feature__content">
                  <p class="feature__title">Журналы посещений</p>
                  <p class="feature__text">
                    NFCKEY предоставляет подробные журналы доступа, где в любое время можно увидеть
                    посещения ваших гостей или персонала.
                  </p>
                </div>
              </div>
              <div class="feature">
                <Sparkles class="shrink-0 text-brand-400" />
                <div class="feature__content">
                  <p class="feature__title">Настраиваемые ограничения</p>
                  <p class="feature__text">
                    Установите свои правила для каждого замка - настраивайте лимиты, которые не
                    смогут превысить ваши арендаторы
                  </p>
                </div>
              </div>
              <div class="feature">
                <Sparkles class="shrink-0 text-brand-400" />
                <div class="feature__content">
                  <p class="feature__title">Масштабируемость</p>
                  <p class="feature__text">
                    Добавляйте и удаляйте замки по мере необходимости, чтобы ваша система контроля
                    доступа развивалась вместе с вашим портфелем недвижимости.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="features-right">
          <div class="features-images">
            <div class="features-images__group">
              <div class="features__list features__list_mobile">
                <div class="feature">
                  <div class="feature__content feature__content_mobile">
                    <div class="flex w-full justify-center gap-2">
                      <Sparkles class="shrink-0 text-brand-400" />
                      <p class="feature__title feature__title_mobile">
                        Удаленное управление доступом
                      </p>
                    </div>
                    <p class="feature__text feature__text_mobile">
                      Вы можете управлять доступом из любой точки мира. Не нужно присутствовать
                      лично – просто выдайте или отмените доступ несколькими нажатиями.
                    </p>
                  </div>
                </div>
              </div>
              <img src="../assets/images/mockup-ll-add-user-role.webp" alt="" />
            </div>
            <div class="features-images__group">
              <div class="features__list features__list_mobile">
                <div class="feature">
                  <div class="feature__content feature__content_mobile">
                    <div class="flex w-full justify-center gap-2">
                      <Sparkles class="shrink-0 text-brand-400" />
                      <p class="feature__title feature__title_mobile">Журналы посещений</p>
                    </div>
                    <p class="feature__text feature__text_mobile">
                      NFCKEY предоставляет подробные журналы доступа, где в любое время можно
                      увидеть посещения ваших гостей или персонала.
                    </p>
                  </div>
                </div>
              </div>
              <img src="../assets/images/mockup-ll-visits.webp" alt="" />
            </div>
            <div class="features-images__group">
              <div class="features__list features__list_mobile">
                <div class="feature">
                  <div class="feature__content feature__content_mobile">
                    <div class="flex w-full justify-center gap-2">
                      <Sparkles class="shrink-0 text-brand-400" />
                      <p class="feature__title feature__title_mobile">Настраиваемые ограничения</p>
                    </div>
                    <p class="feature__text feature__text_mobile">
                      Установите свои правила для каждого замка - настраивайте лимиты, которые не
                      смогут превысить ваши арендаторы
                    </p>
                  </div>
                </div>
              </div>
              <img src="../assets/images/mockup-ll-split-limits.webp" alt="" />
            </div>
            <div class="features-images__group">
              <div class="features__list features__list_mobile">
                <div class="feature">
                  <div class="feature__content feature__content_mobile">
                    <div class="flex w-full justify-center gap-2">
                      <Sparkles class="shrink-0 text-brand-400" />
                      <p class="feature__title feature__title_mobile">Масштабируемость</p>
                    </div>
                    <p class="feature__text feature__text_mobile">
                      Добавляйте и удаляйте замки по мере необходимости, чтобы ваша система контроля
                      доступа развивалась вместе с вашим портфелем недвижимости.
                    </p>
                  </div>
                </div>
              </div>
              <img src="../assets/images/mockup-ll-home-locks.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="steps" class="min-h-max">
    <div class="flex flex-col items-center gap-24">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient">
          Упростите жизнь себе и вашим гостям на каждом этапе
        </h2>
      </div>
      <div class="flex flex-col justify-center gap-x-4 gap-y-12 xl:flex-row">
        <div class="steps-item">
          <p class="steps-item__step">01</p>
          <p class="steps-item__title">Регистрация</p>
          <p class="steps-item__text">
            Вы создаете и отправляете гостю цифровой ключ в мобильном приложении. С этого момента
            ваш гость имеет доступ к объекту недвижимости на время пребывания.
          </p>
        </div>
        <div class="steps-item">
          <p class="steps-item__step">02</p>
          <p class="steps-item__title">Заселение</p>
          <p class="steps-item__text">
            По прибытии гость использует свой смартфон, чтобы открыть дверь. На этом шаге нет
            необходимости в передаче ключей и личного присутствия.
          </p>
        </div>
        <div class="steps-item">
          <p class="steps-item__step">03</p>
          <p class="steps-item__title">Отъезд</p>
          <p class="steps-item__text">
            В день отъезда срок действия цифрового ключа автоматически истекает. Вашему гостю
            достаточно просто выйти – дверь заблокируется автоматически.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="subscription">
    <div class="flex flex-col items-center gap-16">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient">
          Разблокируйте дополнительные преимущества с подпиской
        </h2>
        <p class="subtitle_ca__text">
          Выберите план подписки, открывающий премиальные функции для расширения ваших возможностей
          арендодателя
        </p>
        <router-link to="/pricing">
          <Button variant="link" class="subtitle_ca__action">
            <p>Посмотреть все варианты</p>
            <ArrowRight class="h-5 w-5 text-brand-400" />
          </Button>
        </router-link>
      </div>
      <SubscriptionCardList :items="subscriptions.data" />
    </div>
  </section>
  <section id="faq" class="min-h-max">
    <div class="flex flex-wrap items-start justify-start gap-16 md:flex-nowrap md:justify-center">
      <div class="subtitle_la max-w-lg">
        <h2 class="subtitle_la__title subtitle_la__title_gradient h300">
          Получите ответы на часто задаваемые вопросы
        </h2>
        <router-link to="/faq">
          <Button class="gap-2 bg-brand-400 hover:bg-brand-300">
            <p class="h50 font-medium">Перейти в раздел FAQ</p>
            <ArrowRight class="h-5 w-5 text-white" />
          </Button>
        </router-link>
      </div>
      <Accordion type="multiple" class="faq-list faq-list_home" collapsible>
        <AccordionItem v-for="item in faqItems" :key="item.value" :value="item.value">
          <AccordionTrigger class="text-start">{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            <div class="faq-list__content faq-list__content_home" v-html="item.content"></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>
