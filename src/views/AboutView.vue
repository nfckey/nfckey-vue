<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

import { AvatarList } from '@/components/ui/avatar'
import { PublishingList } from '@/components/ui/publishing'
import { Unlock, Smartphone, Shield } from 'lucide-vue-next'

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
  const content = gsap.utils.toArray('.story-content__section:not(:first-child)')
  const imageGroups = gsap.utils.toArray('.story-images__group:not(:first-child)')

  gsap.set(content, { yPercent: 101 })

  let mm = gsap.matchMedia()

  mm.add('(min-width: 767.98px)', () => {
    ScrollTrigger.create({
      trigger: '.story-right',
      start: 'top top',
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
  const tl = gsap.timeline()
  tl.from('.about-team__logo', { opacity: 0, duration: 1 }, 0.5)
    .from('.about-team__title_main', { y: 50, opacity: 0, duration: 1.5 }, 1)
    .from('.team__person', { opacity: 0, stagger: 0.2 }, 2)

  animateOnScroll('#publishing', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#publishing', '.publishing-list__item', { opacity: 0, stagger: 0.3 })

  initializeStoryline()

  animateOnScroll('.story-right', '.story-images:first-child img', {
    opacity: 0,
    duration: 1,
    stagger: 0.3
  })
  animateOnScroll('#priorities', '.subtitle_ca', { opacity: 0, y: 50, duration: 1 }, '-30%')
  animateOnScroll('#priorities', '.priorities-item', { opacity: 0, stagger: 0.3 })
})
</script>

<template>
  <section id="about-team">
    <div class="flex flex-col items-center gap-24">
      <div class="flex max-w-4xl flex-col items-center gap-8">
        <img class="about-team__logo" src="../assets/logo-large.svg" alt="Логотип NFCKEY" />
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
          <div class="priorities-item__icon">
            <Unlock class="size-6 text-vneutral-50" />
          </div>
          <p class="priorities-item__title">Доступность инноваций</p>
          <p class="priorities-item__text">
            Мы стремимся создать умный замок, который предлагает новый опыт использования за
            доступную цену
          </p>
        </div>
        <div class="priorities-item">
          <div class="priorities-item__icon">
            <Smartphone class="size-6 text-vneutral-50" />
          </div>
          <p class="priorities-item__title">Удобство использования</p>
          <p class="priorities-item__text">
            Мы уделяем особое внимание удобству использования, чтобы вы могли свободно управлять
            множеством доступных функций
          </p>
        </div>
        <div class="priorities-item">
          <div class="priorities-item__icon">
            <Shield class="size-6 text-vneutral-50" />
          </div>
          <p class="priorities-item__title">Быстрота и надежность</p>
          <p class="priorities-item__text">
            Мы стараемся максимально оптимизировать используемые алгоритмы и обеспечить надежную
            работы системы
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
          <p class="story-content__title">«Я в деле»</p>
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
          <p class="story-content__title">«Технолидеры Москвы»</p>
          <p class="story-content__text">
            В рамках молодежного технологического акселератора
            <a href="https://rcmos.moscow/technoentr">«Технолидеры Москвы»</a> нас ожидал
            двухнедельный период продуктивной работы с экспертами. <br /><br />
            Нам удалось не только получить ценную обратную связь и заметно продвинуться в развитии
            проекта, но и наладить деловые связи, обратив на себя внимание экспертов и партнеров.
          </p>
        </div>
        <div class="story-content__section">
          <p class="story-content__date">Декабрь 2023 – н. в.</p>
          <p class="story-content__title">«Долина стартапов»</p>
          <p class="story-content__text">
            В декабре мы прошли отбор на технологический акселератор
            <a href="https://xn--80aaaigyurggkkloc.xn--p1ai/">«Долина стартапов»</a>, созданный при
            сотрудничестве с двумя лидерами в сфере инноваций: «Акселератором Возможностей» и
            научно-технологической долиной МГУ «Воробьевы горы». <br /><br />
            Сейчас происходит определение партнеров на конкурсной основе, а в марте 2024 года
            ожидается оглашение результатов.
          </p>
        </div>
        <div class="story-content__section">
          <p class="story-content__date">Январь 2024 – н. в.</p>
          <p class="story-content__title story-content__title_large">
            «Россия – страна возможностей»
          </p>
          <p class="story-content__text">
            В январе мы приняли участие в национальной премии
            <a href="https://premia.rsv.ru/">«Россия – страна возможностей»</a>. Организатор
            мероприятия предоставляет открытую площадку для обмена опытом между талантливыми и
            неравнодушными людьми всех возрастов. <br /><br />
            Недавно мы прошли первый отборочный этап и получили сертификат, чему крайне рады ввиду
            большого числа желающих принять участие.
          </p>
        </div>
        <div class="story-content__section">
          <p class="story-content__date">Январь 2024 – н. в.</p>
          <p class="story-content__title">Проект «Твой ход»</p>
          <p class="story-content__text">
            В конце января мы подали заявку на участие во всероссийском студенческом проекте
            <a href="https://tvoyhod.online/">«Твой ход»</a>. Он помогает участникам открывать себя
            по-новому, получать практические навыки, находить единомышленников, создавать и
            развивать собственные проекты. <br /><br />
            В данный момент мы шаг за шагом проходим этапы конкурса и в скором времени сможем
            поделиться результатами.
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
            - оценить их с экспертной точки зрения и поделиться нашей историей и видением.
            <br /><br />
            Несколько дней спустя наши лица появились на экранах
            <a href="https://dom.fadm.gov.ru/">Дома молодежи ВДНХ</a> во время открытия IV сезона
            федерального предпринимательского конкурса «Я в деле».
          </p>
        </div>
      </div>
    </div>
    <div class="story-right">
      <div class="story-images">
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Апрель – Май 2023</p>
            <p class="story-content__title">«Я в деле»</p>
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
            src="../assets/images/ya-v-dele-team-1.png"
            alt="Команда NFCKEY на конкурсе «Я в деле»"
          />
          <img
            src="../assets/images/ya-v-dele-team-2.png"
            alt="Команда NFCKEY на конкурсе «Я в деле»"
          />
          <img
            src="../assets/images/ya-v-dele-certificate 1.png"
            alt="Письмо поддержки проекту NFCKEY от конкурса «Я в деле»"
          />
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Ноябрь – Декабрь 2023</p>
            <p class="story-content__title">«Технолидеры Москвы»</p>
            <p class="story-content__text">
              В рамках молодежного технологического акселератора
              <a href="https://rcmos.moscow/technoentr">«Технолидеры Москвы»</a> нас ожидал
              двухнедельный период продуктивной работы с экспертами. <br /><br />
              Нам удалось не только получить ценную обратную связь и заметно продвинуться в развитии
              проекта, но и наладить деловые связи, обратив на себя внимание экспертов и партнеров.
            </p>
          </div>
          <img
            src="../assets/images/technolider-1.png"
            alt="Команда NFCKEY на фоне выставочного стенда для конкурса «Технолидеры Москвы»"
          />
          <img
            src="../assets/images/technolider-2.png"
            alt="Команда NFCKEY на фоне выставочного пространства конкурса «Технолидеры Москвы»"
          />
          <img
            src="../assets/images/technolider-3.png"
            alt="Команда NFCKEY на фоне баннера конкурса «Технолидеры Москвы»"
          />
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Декабрь 2023 – н. в.</p>
            <p class="story-content__title">«Долина стартапов»</p>
            <p class="story-content__text">
              В декабре мы прошли отбор на технологический акселератор
              <a href="https://xn--80aaaigyurggkkloc.xn--p1ai/">«Долина стартапов»</a>, созданный
              при сотрудничестве с двумя лидерами в сфере инноваций: «Акселератором Возможностей» и
              научно-технологической долиной МГУ «Воробьевы горы». <br /><br />
              Сейчас происходит определение партнеров на конкурсной основе, а в марте 2024 года
              ожидается оглашение результатов.
            </p>
          </div>
          <img src="../assets/images/ds-logo.svg" alt="Логотип акселератора «Долина стартапов»" />
          <div class="flex w-full justify-around py-8 md:px-4 md:py-0">
            <img
              class="w-[40%]"
              src="../assets/images/ds-mgu.png"
              alt="Логотип ИНТЦ МГУ «Воробьевы горы»"
            />
            <img
              class="w-[40%]"
              src="../assets/images/ds-accel.png"
              alt="Логотип «Акселератор возможностей»"
            />
          </div>
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Январь 2024 – н. в.</p>
            <p class="story-content__title story-content__title_large">
              «Россия – страна возможностей»
            </p>
            <p class="story-content__text">
              В январе мы приняли участие в национальной премии
              <a href="https://premia.rsv.ru/">«Россия – страна возможностей»</a>. Организатор
              мероприятия предоставляет открытую площадку для обмена опытом между талантливыми и
              неравнодушными людьми всех возрастов. <br /><br />
              Недавно мы прошли первый отборочный этап и получили сертификат, чему крайне рады ввиду
              большого числа желающих принять участие.
            </p>
          </div>
          <img src="../assets/images/rsv-logo.webp" alt="Логотип «Россия – страна возможностей»" />
        </div>
        <div class="story-images__group">
          <div class="story-content__section story-content__section_mobile">
            <p class="story-content__date">Январь 2024 – н. в.</p>
            <p class="story-content__title">Проект «Твой ход»</p>
            <p class="story-content__text">
              В конце января мы подали заявку на участие во всероссийском студенческом проекте
              <a href="https://tvoyhod.online/">«Твой ход»</a>. Он помогает участникам открывать
              себя по-новому, получать практические навыки, находить единомышленников, создавать и
              развивать собственные проекты. <br /><br />
              В данный момент мы шаг за шагом проходим этапы конкурса и в скором времени сможем
              поделиться результатами.
            </p>
          </div>
          <img src="../assets/images/tvoi-hod-logo.webp" alt="Логотип «Твой ход»" />
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
              главное - оценить их с экспертной точки зрения и поделиться нашей историей и видением.
              <br /><br />
              Несколько дней спустя наши лица появились на экранах
              <a href="https://dom.fadm.gov.ru/">Дома молодежи ВДНХ</a> во время открытия IV сезона
              федерального предпринимательского конкурса «Я в деле».
            </p>
          </div>
          <img src="../assets/images/nfckey-doorlock-ltr.png" alt="" />
        </div>
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
