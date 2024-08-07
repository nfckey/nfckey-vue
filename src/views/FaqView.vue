<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

gsap.registerPlugin(ScrollTrigger)

const ctx = gsap.context(() => {})

onMounted(() => {
  ctx.add(() => {
    ScrollTrigger.batch('.faq-list__item', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          x: -20,
          stagger: 0.15
        })
      }
    })
  })
})

onUnmounted(() => {
  ctx.revert()
})

const faqSections = [
  {
    title: 'Общие вопросы',
    questions: [
      {
        title: 'Как работает система замков NFCKEY?',
        content:
          'В основе работы замка и мобильного приложения лежит технология NFC, которая обеспечивает безопасный обмен данными при приближении устройства. После проверки зашифрованного цифрового ключа и всех необходимых разрешений механизм замка открывает дверь.'
      },
      {
        title: 'Как NFCKEY обеспечивает безопасность моей квартиры?',
        content:
          '<p>Для обеспечения безопасности в системе NFCKEY используются современные и проверенные технологии шифрования данных. Доступ к двери могут получить только авторизованные пользователи, имеющие соответствующий цифровой ключ в приложении NFCKEY.</p><br><p>С точки зрения механической защиты, основные компоненты замочного механизма не могут быть достигнуты с внешней стороны двери.</p>'
      },
      {
        title: 'Могут ли дети пользоваться замками NFCKEY?',
        content:
          '<p>Да, замки NFCKEY – это безопасное и удобное решение для пользователей всех возрастов, включая детей. Одним из преимуществ нашей системы является то, что основной способ открытия замка исключает использование физических ключей, которые можно легко потерять. Дети могут получить доступ к помещению, просто прислонив телефон к замку, при условии, что у них есть цифровой ключ в приложении NFCKEY.</p><br><p>Если на телефоне вашего ребенка установлен один из способов блокировки, то при потере телефона несанкционированный доступ будет практически невозможен, поскольку для работы приложения потребуется разблокировать телефон. Таким образом вам не придется переживать за потерю ключа, а в дополнение вы сможете получать уведомления, когда ребенок будет возвращаться домой.</p>'
      },
      {
        title: 'Как мне начать пользоваться системой NFCKEY?',
        content:
          '<p>Начать работу с NFCKEY очень просто. Для этого достаточно выполнить следующие действия:</p><ol><li>Проведите установку замка в вашу дверь в соответствии с инструкцией из комплекта поставки.</li><li>Загрузите приложение NFCKEY из магазина приложений вашего устройства.</li><li>Зарегистрируйте учетную запись в приложении, указав свои данные.</li><li>Добавьте свой замок NFCKEY в приложение, введя код из комплекта поставки замка.</li><li>Настройте права доступа для себя, членов семьи, друзей или всех, кому необходим доступ к вашему помещению.</li></ol><p>Теперь вы готовы к использованию системы NFCKEY: для получения доступа просто поднесите смартфон к замку.</p>'
      },
      {
        title: 'Обязательно ли приобретать подписку для работы системы NFCKEY?',
        content:
          'Нет, для работы основных функций системы умных замков NFCKEY не требуется приобретать подписку.'
      },
      {
        title: 'Какие преимущества мне дает подписка?',
        content:
          '<p>Преимущества, предоставляемые доступными вариантами подписки, включают в себя дополнительные возможности для контроля доступа и увеличения числа доступных лимитов. Ознакомиться со всеми тарифными планами и провести их сравнение вы можете на странице <a href="./pricing">«Подписка»</a>.</p>'
      },
      {
        title: 'Как я могу сменить текущий тарифный план?',
        content:
          '<p>Чтобы перейти на премиальные функции и преимущества, выполните следующие простые действия в мобильном приложении NFCKEY:</p><ol><li>Выберите раздел «Подписка» в нижнем меню приложения. Просмотрите доступные планы подписки и выберите тот, который лучше всего соответствует вашим потребностям. Вы можете выбрать между ежемесячным и ежегодным способами оплаты.</li><li>Следуя инструкциям на экране, завершите процесс оплаты выбранного плана подписки. Вам потребуется предоставить платежную информацию через один из доступных для выбора платежных шлюзов.</li><li>После подтверждения оплаты вы получите доступ к премиум-функциям и преимуществам, предлагаемым выбранным тарифным планом подписки NFCKEY.</li></ol><p>Подписка автоматически продлевается после окончания ее срока. Посмотреть сведения о подписке и отключить автоматическое продление вы сможете в том же разделе «Подписка».</p></br><p>Следует помнить, что премиум-функции и преимущества могут варьироваться в зависимости от конкретного плана подписки. Обязательно ознакомьтесь с деталями тарифного плана, чтобы понять весь объем включенных в него возможностей. Если у вас возникнут вопросы или проблемы в процессе обновления, свяжитесь с нами одним из способов, представленных в нижней части веб-сайта.</p>'
      }
    ]
  },
  {
    title: 'Совместимость',
    questions: [
      {
        title: 'Можно ли устанавливать замки NFCKEY в различные типы дверей?',
        content:
          '<p>Да, замки NFCKEY разрабатываются таким образом, чтобы быть универсальными для установки в различные типы дверей. Мы сможем предоставить более подробные сведения ближе к моменту выхода замков NFCKEY на рынок.</p><br><p>Если у вас есть конкретные вопросы или требования к установке, мы всегда готовы помочь вам в обеспечении беспроблемного процесса установки.</p>'
      },
      {
        title: 'Доступно ли приложение NFCKEY для моего смартфона?',
        content:
          '<p>Приложение NFCKEY разработано с учетом совместимости с широким спектром современных смартфонов, однако имеются определенные требования, с которыми вам следует ознакомиться:</p><ul><li>Устройство должно обладать поддержкой NFC, доступной в большинстве современных смартфонов;</li><li>Для регистрации и обеспечения полной функциональности приложения необходимо интернет-соединение. Функции открытия двери будут доступны без интернет-соединения;</li><li>Устройство должно работать под управлением Android 8.1 (Oreo) или более поздней версии, либо под управлением iOS 15.0 или более поздней версии для моделей смартфонов от Apple.</li></ul><p>Приложение доступно для устройств на базе Android и iOS, поэтому вы можете загрузить его из Google Play или App Store, в зависимости от операционной системы вашего смартфона. Обязательно уточните характеристики вашего устройства у производителя или в приложении «Настройки».</p>'
      },
      {
        title: 'Поддерживает ли NFCKEY смарт-часы?',
        content:
          'Мы понимаем растущий спрос на совместимость приложений со смарт-часами, но в настоящее время поддержка недоступна. Однако наша команда рассматривает возможность подобной интеграции. Мы стремимся развивать наш продукт и предоставить вам еще более удобные возможности доступа. Следите за последними анонсами и обновлениями в наших социальных сетях и на сайте.'
      },
      {
        title: 'Могу ли я интегрировать NFCKEY с существующей системой «умный дом»?',
        content:
          'На данный момент – нет, но мы планируем добавить поддержку интеграции NFCKEY с системами умного дома в будущих моделях. Такая интеграция позволит централизовать и управлять устройствами домашней автоматизации через единый интерфейс, обеспечивая еще больший контроль и удобство.'
      }
    ]
  },
  {
    title: 'Функциональность и особенности',
    questions: [
      {
        title: 'Каково время автономной работы замков NFCKEY?',
        content:
          '<p>Замки NFCKEY рассчитаны на длительное время автономной работы для обеспечения надежной работы. Конкретный срок службы батарей может варьироваться в зависимости от их производителя, но в среднем вы можете рассчитывать на срок службы в размере одного года.</p><br><p>Когда приходит время замены батареек, замок заранее уведомит вас об этом при помощи звуковых сигналов. Также вы сможете узнать об этом в мобильном приложении при очередном открытии двери.</p><br><p>Замена батареек не представляет собой сложного процесса и может быть выполнена с использованием пальчиковых батареек (АА). Подробные инструкции по замене можно найти в руководстве пользователя NFCKEY.</p>'
      },
      {
        title: 'Смогу ли я сохранить доступ к своему помещению, если сядет батарея моего телефона?',
        content:
          'На случай непредвиденных ситуаций или проблем с батареей мы предлагаем использовать альтернативное решение в качестве физического ключа. Этот резервный метод входа гарантирует, что вы сможете войти в свое помещение даже при таких сценариях. Рекомендуем держать ключ вне помещения в безопасном месте, либо у людей, которым вы доверяете.'
      },
      {
        title: 'Что произойдет, если я потеряю свой телефон?',
        content:
          '<p>NFCKEY предусматривает меры, которые помогут вам восстановить доступ к вашему помещению в случае потери смартфона.</p><br><p>Первым делом как можно скорее свяжитесь с нашей службой поддержки. Они помогут вам отключить доступ к вашему замку с утерянного телефона и проведут вас через процесс перенастройки приложения NFCKEY на новом устройстве для повторного выпуска цифровых ключей.</p><br><p>Замки NFCKEY поставляются с альтернативным методом доступа в качестве физического ключа. Вы можете использовать это решение для доступа к своему помещению пока вы работаете над восстановлением или заменой потерянного телефона.</p><br><p>Тем не менее, мы рекомендуем предпринять меры по защите вашего смартфона и приложения, например, установив PIN-код или биометрическую защиту, чтобы предотвратить несанкционированный доступ в случае потери или кражи телефона.</p>'
      },
      {
        title: 'Могу ли я предоставить временный доступ гостям с помощью NFCKEY?',
        content:
          'Да, NFCKEY позволяет предоставлять временный доступ гостям или посетителям. С помощью нашего приложения вы можете легко создавать цифровые ключи с ограниченным сроком действия для гостей, предоставляя им доступ к вашему помещению.'
      },
      {
        title: 'Как я могу получать уведомления о входах и выходах?',
        content:
          '<p>Получение уведомлений о входах и выходах в режиме реального времени является одним из преимуществ использования NFCKEY. Вы можете настроить параметры уведомлений в соответствии со своими предпочтениями используя наше приложение. Перейдите в раздел «Настройки» > «Уведомления» и выберите необходимые параметры.</p><br><p>Следует уточнить, что для получения уведомлений потребуется наличие интернет-соединения на вашем устройстве.</p>'
      },
      {
        title: 'Могу ли я дистанционно управлять открытием и закрытием замка NFCKEY?',
        content:
          'Для NFCKEY безопасность является главным приоритетом. Наши замки не предоставляют возможности дистанционно управлять открытием и закрытием, чтобы обеспечить максимальный уровень безопасности для наших пользователей. Такие опции могут создавать уязвимости, облегчая несанкционированный доступ злоумышленникам. Сосредоточившись на технологии NFC и доступе с помощью смартфона, мы можем обеспечить более надежное и устойчивое к взлому решение для вашего спокойствия.'
      }
    ]
  },
  {
    title: 'Сценарии использования',
    questions: [
      {
        title: 'Замок может помочь, если я сдаю в аренду свою квартиру?',
        content:
          'Да, вы можете создавать и отправлять ключи вашим арендаторам в нашем приложении, а после их выселения ключ можно удалить. Подробнее о преимуществах, предоставляемых арендодателям, вы можете узнать на отдельной странице <a href="./landlords">«Арендодателям»</a> нашего веб-сайта.'
      },
      {
        title: 'Могу ли я управлять арендой сразу нескольких объектов недвижимости?',
        content:
          'Да, вы можете управлять несколькими объектами недвижимости используя одну учетную запись. Мобильное приложение позволяет легко добавлять или удалять замки по мере необходимости.'
      },
      {
        title: 'Как мне начать пользоваться NFCKEY в роли арендодателя?',
        content:
          'Начать работу с NFCKEY очень просто! После приобретения замка и его активации в приложении, изучите <a href="./pricing">варианты подписки</a> из категории «Арендодателям» и выберите для себя тарифный план, который соответствует вашим потребностям.'
      },
      {
        title: 'Как NFCKEY упрощает процесс заселения и выселения для моих гостей?',
        content:
          '<p>NFCKEY позволяет отправлять гостям защищенные цифровые ключи через наше мобильное приложение. Гости получают доступ к квартире с помощью своих смартфонов. Все происходит дистанционно.</p><br><p>Вы самостоятельно настраиваете время действия ключа и можете менять время заселения и отъезда гостей.</p>'
      },
      {
        title: 'Могу ли я удаленно контролировать доступ к моей недвижимости с помощью NFCKEY?',
        content:
          '<p>Да, NFCKEY предоставляет журнал доступа в режиме реального времени. Вы всегда сможете узнать, кто из гостей имеет доступ к замку и когда он в последний раз использовался.</p></br><p>Кроме того, с помощью нашего мобильного приложения вы можете удаленно блокировать доступ пользователям, обеспечивая безопасность и удобство из любого места.</p>'
      },
      {
        title: 'Подходит ли NFCKEY для использования как в жилых, так и в коммерческих помещениях?',
        content:
          'Да, NFCKEY отличается универсальностью и адаптивностью, что позволяет использовать его в самых разных областях. Если вы хотите повысить безопасность и удобство вашего дома или нуждаетесь в надежном решении для контроля доступа на коммерческом объекте, NFCKEY сможет удовлетворить ваши потребности. Наши замки подходят как для жилых, так и для коммерческих помещений, обеспечивая одинаково высокий уровень безопасности и удобства независимо от сферы применения.'
      }
    ]
  },
  {
    title: 'Поддержка и обслуживание',
    questions: [
      {
        title: 'Какие гарантии предоставляет NFCKEY?',
        content:
          'На замки NFCKEY предоставляется ограниченная гарантия сроком в 1 год с момента приобретения, которая распространяется на дефекты материалов и изготовления. Подробную информацию о гарантии на конкретную модель замка NFCKEY вы можете узнать в документации к изделию.'
      },
      {
        title: 'На какую техническую поддержку замков NFCKEY я могу рассчитывать?',
        content:
          'NFCKEY стремится обеспечить постоянную техническую поддержку и оптимальную работу наших замков. Мы постоянно совершенствуем и улучшаем нашу систему с помощью обновлений программного обеспечения, чтобы предоставить вам самые последние функции и улучшения безопасности.'
      },
      {
        title: 'Какие варианты поддержки клиентов доступны, если мне потребуется помощь?',
        content:
          '<p>Мы ценим каждого клиента, поэтому будем рады помочь вам на каждом шагу. NFCKEY предлагает несколько вариантов поддержки клиентов:</p><ul><li>Наша компетентная служба поддержки готова помочь вам в решении любых вопросов и проблем. Вы можете связаться с нами через контактные данные, расположенные в нижней части веб-сайта. Мы готовы ответить на ваши вопросы, оказать техническую помощь и дать рекомендации.</li><li>Каждый замок NFCKEY поставляется с полным руководством пользователя, содержащим пошаговые инструкции по установке, настройке и эксплуатации. Эти руководства являются источником информации для устранения неисправностей и понимания работы замка, а также помогут вам при непредвиденных ситуациях.</li></ul><p>Ваша удовлетворенность – наш главный приоритет, и мы обязуемся обеспечить поддержку, необходимую вам для максимальной отдачи от вашей системы NFCKEY. Если у вас есть вопросы по установке, эксплуатации или чему-либо еще, мы всегда готовы помочь.</p><br><p>Обратите внимание, что услуги поддержки для компаний и оптовых покупателей организованы индивидуально и определяются договором. Если вы представляете юридическое лицо и у вас есть конкретные вопросы или требования, мы рекомендуем вам отправить отдельное обращение на электронный адрес почты, указанный в нижней части веб-сайта. Мы будем рады помочь подобрать для вас индивидуальные решения и варианты, отвечающие потребностям вашего бизнеса.</p>'
      },
      {
        title: 'Могу ли я совершить оптовую закупку замков, представляя юридическое лицо?',
        content:
          'Для получения информации об оптовых заказах, ценах и возможностях персонализации, пожалуйста, свяжитесь с нами одним из способов, представленных в нижней части веб-сайта.'
      }
    ]
  }
]
</script>

<template>
  <section>
    <div class="flex flex-col items-center gap-12">
      <div class="subtitle_ca mb-12">
        <h1 class="subtitle_ca__title subtitle_ca__title_gradient">Узнайте больше об NFCKEY</h1>
        <p class="subtitle_ca__text">
          Изучите раздел с часто задаваемыми вопросами и узнайте, как NFCKEY может органично
          вписаться в ваш образ жизни
        </p>
      </div>

      <div
        v-for="(section, index) in faqSections"
        :key="index"
        class="flex w-full flex-col items-start gap-4 md:w-2/3 xl:w-1/2"
      >
        <h2 class="h100 faq-list__item font-semibold text-brand-400">{{ section.title }}</h2>
        <Accordion type="multiple" class="faq-list" collapsible>
          <AccordionItem
            v-for="(question, idx) in section.questions"
            :key="idx"
            :value="`item-${idx}`"
            class="faq-list__item"
          >
            <AccordionTrigger class="text-start">{{ question.title }}</AccordionTrigger>
            <AccordionContent>
              <div class="faq-list__content" v-html="question.content"></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>
