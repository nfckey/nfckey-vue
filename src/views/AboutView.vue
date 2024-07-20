<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mediumZoom from 'medium-zoom'
import { onMounted, onUnmounted } from 'vue'

import { AvatarList } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { PublishingList } from '@/components/ui/publishing'
import { Shield, Smartphone, Unlock } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const ctx = gsap.context(() => {})

const animateOnScroll = (trigger, elements, options, triggerStart, triggerEnd) => {
  gsap.from(trigger + ' ' + elements, {
    ...options,
    scrollTrigger: {
      trigger: trigger,
      start: triggerStart ? triggerStart : 'top center',
      end: triggerEnd ? triggerEnd : 'top center'
    }
  })
}

const initializeStoryline = () => {
  const content = gsap.utils.toArray('.story-content__section:not(:first-child)')
  const imageGroups = gsap.utils.toArray('.story-images__group:not(:first-child)')

  gsap.set(content, { yPercent: 101 })

  let mm = gsap.matchMedia()

  mm.add('(min-width: 767.98px)', () => {
    ScrollTrigger.create({
      trigger: '#story',
      start: '96px top',
      end: 'bottom bottom',
      pin: '.story-left'
    })
  })

  imageGroups.forEach((group, index) => {
    ScrollTrigger.create({
      trigger: group,
      start: 'top 80%',
      end: 'top 10%',
      animation: gsap.to(content[index], { yPercent: 0 }),
      scrub: true
    })
  })
}

onMounted(() => {
  mediumZoom('[data-zoomable]')

  document
    .querySelectorAll('.story-images img')
    .forEach((el) => el.addEventListener('load', () => ScrollTrigger.refresh()))

  ctx.add(() => {
    const tl = gsap.timeline()
    tl.from('.about-team__logo', { opacity: 0, duration: 0.5 }, 0.5)
      .from('.about-team__title_main', { y: 25, opacity: 0, duration: 1 }, 1)
      .from('.about-team__team .team__person', { opacity: 0, stagger: 0.2 }, 2)

    animateOnScroll(
      '.about-team__contributors',
      '.about-team__title_contributors',
      { opacity: 0, y: 25, duration: 1 },
      '30% bottom',
      'bottom bottom'
    )
    animateOnScroll(
      '.about-team__contributors',
      '.team__person',
      { opacity: 0, stagger: 0.2 },
      '50% bottom',
      'bottom bottom'
    )

    animateOnScroll(
      '#priorities',
      '.subtitle_ca',
      { opacity: 0, y: 50, duration: 1 },
      '-30% center'
    )
    animateOnScroll('#priorities', '.priorities-item', { opacity: 0, stagger: 0.3 })

    initializeStoryline()
    animateOnScroll('.story-right', '.story-images__group:first-child img', {
      opacity: 0,
      duration: 1,
      stagger: 0.3
    })
  })
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section id="about-team">
    <div class="flex flex-col items-center gap-24">
      <div class="flex max-w-4xl flex-col items-center gap-8">
        <img class="about-team__logo" src="@/assets/logo-large.svg" alt="О проекте" />
        <p class="about-team__title_main">
          NFCKEY – команда энтузиастов, стремящаяся стать первым серьезным конкурентом на рынке
          умных замков среди российских производителей
        </p>
      </div>
      <div class="about-team__team">
        <AvatarList />
      </div>
      <div class="about-team__contributors flex flex-col items-center gap-8">
        <p class="about-team__title_contributors">
          Выражаем отдельную благодарность за участие в развитии проекта
        </p>
        <AvatarList is-contributors />
      </div>
    </div>
  </section>

  <section id="priorities" class="min-h-max">
    <div class="flex flex-col items-center gap-16">
      <div class="subtitle_ca">
        <h2 class="subtitle_ca__title subtitle_ca__title_gradient bg-gradient-to-r">
          Наши приоритеты
        </h2>
        <p class="subtitle_ca__text">
          Каждый член команды вносит свой уникальный вклад в проект. Мы работаем коллективно,
          гарантируя, что каждое решение продумано до мелочей и соответствует общему видению.
        </p>
      </div>
      <div class="flex flex-col justify-center gap-x-4 gap-y-12 xl:flex-row">
        <div class="priorities-item">
          <div class="icon_big">
            <Unlock class="size-6 text-vneutral-50" />
          </div>
          <p class="priorities-item__title">Доступность инноваций</p>
          <p class="priorities-item__text">
            Мы стремимся создать умный замок, который предлагает новый опыт использования за
            доступную цену
          </p>
        </div>
        <div class="priorities-item">
          <div class="icon_big">
            <Smartphone class="size-6 text-vneutral-50" />
          </div>
          <p class="priorities-item__title">Удобство использования</p>
          <p class="priorities-item__text">
            Мы уделяем особое внимание удобству использования, чтобы вы могли свободно управлять
            множеством доступных функций
          </p>
        </div>
        <div class="priorities-item">
          <div class="icon_big">
            <Shield class="size-6 text-vneutral-50" />
          </div>
          <p class="priorities-item__title">Быстрота и надежность</p>
          <p class="priorities-item__text">
            Мы стараемся максимально оптимизировать наши алгоритмы и обеспечить надежную работы
            системы
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="story" class="flex">
    <div class="story-left">
      <div class="story-content">
        <div class="story-content__section">
          <p class="story-content__date">Апрель – Май 2023</p>
          <p class="story-content__title">Я в деле</p>
          <p class="story-content__text">
            Отправной точкой проекта можно считать участие в конкурсе
            <a href="https://xn--b1aeda3a0j.xn--p1ai/">«Я в деле»</a> — масштабной программе по
            развитию предпринимательских навыков среди молодежи. Здесь развилась идея и
            сформировались первые технические решения. <br /><br />
            Мы заняли <span>третье место</span> среди всех проектов Москвы в треке «инновации» и
            впервые познакомились с нашим наставником.
          </p>
        </div>
        <div class="story-content__section">
          <p class="story-content__date">Ноябрь – Декабрь 2023</p>
          <p class="story-content__title">Технолидеры Москвы</p>
          <p class="story-content__text">
            В рамках молодежного технологического акселератора
            <a href="https://rcmos.moscow/technoentr">«Технолидеры Москвы»</a> нас ожидал
            двухнедельный период продуктивной работы с экспертами. <br /><br />
            Нам удалось не только получить ценную обратную связь и заметно продвинуться в развитии
            проекта, но и наладить деловые связи, обратив на себя внимание экспертов и партнеров.
          </p>
        </div>
        <div class="story-content__section">
          <p class="story-content__date">Январь – Апрель 2024</p>
          <p class="story-content__title story-content__title_large">
            Россия – страна возможностей
          </p>
          <p class="story-content__text">
            В январе мы приняли участие в национальной премии
            <a href="https://premia.rsv.ru/">«Россия – страна возможностей»</a>. Организатор
            мероприятия предоставляет открытую площадку для обмена опытом между талантливыми и
            неравнодушными людьми всех возрастов. <br /><br />
            Мы прошли первый отборочный этап и получили сертификат участника, чему крайне рады ввиду
            большого числа желающих принять участие.
          </p>
        </div>
        <div class="story-content__section">
          <p class="story-content__date">Март 2024</p>
          <p class="story-content__title story-content__title_large">
            Открытие IV сезона «Я в деле»
          </p>
          <p class="story-content__text">
            В марте мы вернулись на проект
            <a href="https://xn--b1aeda3a0j.xn--p1ai/">«Я в деле»</a>, но уже в роли экспертов. На
            мероприятии мы смогли познакомиться с новым поколением предпринимателей, а самое главное
            – оценить их с экспертной точки зрения и поделиться нашей историей и мнением.
            <br /><br />
            Несколько дней спустя наши лица появились на экранах
            <a href="https://dom.fadm.gov.ru/">Дома молодежи ВДНХ</a> во время открытия IV сезона
            федерального предпринимательского конкурса «Я в деле».
          </p>
        </div>
        <div class="story-content__section">
          <p class="story-content__date">Май – Июнь 2024</p>
          <p class="story-content__title">Новатор Москвы</p>
          <p class="story-content__text">
            <a href="https://i.moscow/novator">Летом мы приняли участие в «Новатор Москвы»</a> —
            пятом юбилейном конкурсе Мэра Москвы среди инновационных проектов для лучших
            предпринимателей, ученых и изобретателей. <br /><br />
            Проект NFCKEY стал призером конкурса в номинации «Меняющие реальность» по направлению
            «Благоустройство и строительство». Для финалистов доступна образовательная программа
            акселерации от <a href="https://i.moscow/academy">«Академии инноваторов»</a>.
          </p>
        </div>
      </div>
    </div>
    <div class="story-right">
      <div class="story-images">
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Апрель – Май 2023</p>
            <p class="story-content__title">Я в деле</p>
            <p class="story-content__text">
              Отправной точкой проекта можно считать участие в конкурсе
              <a href="https://xn--b1aeda3a0j.xn--p1ai/">«Я в деле»</a> — масштабной программе по
              развитию предпринимательских навыков среди молодежи. Здесь развилась идея и
              сформировались первые технические решения. <br /><br />
              Мы заняли <span>третье место</span> среди всех проектов Москвы в треке «инновации» и
              впервые познакомились с нашим наставником.
            </p>
          </div>
          <img
            src="@/assets/images/ya-v-dele-team-1.png"
            alt="Команда NFCKEY на конкурсе «Я в деле»"
            loading="lazy"
          />
          <img
            src="@/assets/images/ya-v-dele-team-2.png"
            alt="Команда NFCKEY на конкурсе «Я в деле»"
            loading="lazy"
          />
          <img
            src="@/assets/images/ya-v-dele-certificate 1.png"
            alt="Письмо поддержки проекту NFCKEY от конкурса «Я в деле»"
            loading="lazy"
          />
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Ноябрь – Декабрь 2023</p>
            <p class="story-content__title">Технолидеры Москвы</p>
            <p class="story-content__text">
              В рамках молодежного технологического акселератора
              <a href="https://rcmos.moscow/technoentr">«Технолидеры Москвы»</a> нас ожидал
              двухнедельный период продуктивной работы с экспертами. <br /><br />
              Нам удалось не только получить ценную обратную связь и заметно продвинуться в развитии
              проекта, но и наладить деловые связи, обратив на себя внимание экспертов и партнеров.
            </p>
          </div>
          <img
            src="@/assets/images/technolider-1.png"
            alt="Команда NFCKEY на фоне выставочного стенда для конкурса «Технолидеры Москвы»"
            loading="lazy"
          />
          <img
            src="@/assets/images/technolider-2.png"
            alt="Команда NFCKEY на фоне выставочного пространства конкурса «Технолидеры Москвы»"
            loading="lazy"
          />
          <img
            src="@/assets/images/technolider-3.png"
            alt="Команда NFCKEY на фоне баннера конкурса «Технолидеры Москвы»"
            loading="lazy"
          />
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Январь – Апрель 2024</p>
            <p class="story-content__title story-content__title_large">
              Россия – страна возможностей
            </p>
            <p class="story-content__text">
              В январе мы приняли участие в национальной премии
              <a href="https://premia.rsv.ru/">«Россия – страна возможностей»</a>. Организатор
              мероприятия предоставляет открытую площадку для обмена опытом между талантливыми и
              неравнодушными людьми всех возрастов. <br /><br />
              Мы прошли первый отборочный этап и получили сертификат участника, чему крайне рады
              ввиду большого числа желающих принять участие.
            </p>
          </div>
          <img
            src="@/assets/images/rsv-logo.webp"
            style="max-width: 70%"
            alt="Логотип «Россия – страна возможностей»"
            loading="lazy"
          />
          <img
            src="@/assets/images/rsv-certificate.webp"
            alt="Сертификат участника премии «Россия – страна возможностей»"
            loading="lazy"
          />
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Март 2024</p>
            <p class="story-content__title story-content__title_large">
              Открытие IV сезона «Я в деле»
            </p>
            <p class="story-content__text">
              В марте мы вернулись на проект
              <a href="https://xn--b1aeda3a0j.xn--p1ai/">«Я в деле»</a>, но уже в роли экспертов. На
              мероприятии мы смогли познакомиться с новым поколением предпринимателей, а самое
              главное – оценить их с экспертной точки зрения и поделиться нашей историей и мнением.
              <br /><br />
              Несколько дней спустя наши лица появились на экранах
              <a href="https://dom.fadm.gov.ru/">Дома молодежи ВДНХ</a> во время открытия IV сезона
              федерального предпринимательского конкурса «Я в деле».
            </p>
          </div>
          <img
            src="@/assets/images/yvd-iv-1.png"
            alt="Полина Сычева, графический дизайнер NFCKEY"
            loading="lazy"
          />
          <img src="@/assets/images/yvd-iv-2.png" alt="Команда NFCKEY" loading="lazy" />
          <img
            src="@/assets/images/yvd-iv-3.png"
            alt="Команда NFCKEY на мероприятии четвертого сезона конкурса «Я в деле»"
            loading="lazy"
          />
          <video
            class="bg-vneutral-50"
            src="@/assets/videos/yvd-iv-4.mp4"
            preload="metadata"
            controls
            playsinline
            controlsList="nodownload noremoteplayback noplaybackrate"
          ></video>
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Май – Июнь 2024</p>
            <p class="story-content__title">Новатор Москвы</p>
            <p class="story-content__text">
              Летом мы приняли участие в <a href="https://i.moscow/novator">«Новатор Москвы»</a> —
              пятом юбилейном конкурсе Мэра Москвы среди инновационных проектов для лучших
              предпринимателей, ученых и изобретателей. <br /><br />
              Проект NFCKEY стал призером конкурса в номинации «Меняющие реальность» по направлению
              «Благоустройство и строительство». Для финалистов доступна образовательная программа
              акселерации от <a href="https://i.moscow/academy">«Академии инноваторов»</a>.
            </p>
          </div>
          <img
            src="@/assets/images/moscow-inn-1.webp"
            alt="Награждение финалистов конкурса «Новатор Москвы»"
            loading="lazy"
          />
          <img
            src="@/assets/images/moscow-inn-2.webp"
            alt="Объявление финалистов в номинации «Меняющие реальность»"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>

  <section id="photos" class="min-h-max">
    <div class="flex items-center justify-center gap-24">
      <Carousel class="w-full">
        <CarouselContent class="pb-4">
          <CarouselItem>
            <img
              class="h-auto w-full cursor-pointer rounded-xl"
              src="@/assets/team/team-1.webp"
              alt="Команда NFCKEY"
              loading="lazy"
              data-zoomable
            />
          </CarouselItem>
          <CarouselItem>
            <img
              class="h-auto w-full cursor-pointer rounded-xl"
              src="@/assets/team/team-2.webp"
              alt="Команда NFCKEY"
              loading="lazy"
              data-zoomable
            />
          </CarouselItem>
          <CarouselItem>
            <img
              class="h-auto w-full cursor-pointer rounded-xl"
              src="@/assets/team/team-3.webp"
              alt="Команда NFCKEY"
              loading="lazy"
              data-zoomable
            />
          </CarouselItem>
          <CarouselItem>
            <img
              class="h-auto w-full cursor-pointer rounded-xl"
              src="@/assets/team/team-4.webp"
              alt="Команда NFCKEY"
              loading="lazy"
              data-zoomable
            />
          </CarouselItem>
          <CarouselItem>
            <img
              class="h-auto w-full cursor-pointer rounded-xl"
              src="@/assets/team/team-5.webp"
              alt="Команда NFCKEY"
              loading="lazy"
              data-zoomable
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
