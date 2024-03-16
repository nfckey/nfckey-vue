<script setup>
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { toTypedSchema } from '@vee-validate/zod'
import axios from 'axios'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-vue-next'

defineProps({
  inDialog: {
    type: Boolean,
    default: false
  }
})

const isFormSubmitted = ref(false)

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: 'Поле является обязательным',
        invalid_type_error: 'Email должен быть записан в виде строки'
      })
      .email({ message: 'Неверный формат электронной почты' })
  })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  const formId = '1FAIpQLSfkyVd5b4apR-VvFZgwv1nYldZfW-QPz4pXevyZr4IuqdNLpA'
  const url = 'https://docs.google.com/forms/d/e/' + formId + '/formResponse?embedded=true'

  axios({
    method: 'post',
    mode: 'no-cors',
    url: url,
    data: {
      'entry.603433018': values.email,
      'entry.1747991083': 'Уведомление о выходе на рынок'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch((error) => {
    console.log(error)
  })

  isFormSubmitted.value = true
})
</script>

<template>
  <div id="notifications" class="order-1 flex flex-col items-center justify-start gap-6 xl:order-2">
    <div v-if="!isFormSubmitted" class="flex flex-col items-start justify-center gap-2">
      <p class="form_notifications__title" :class="{ '!text-left': inDialog }">
        Будьте в курсе событий
      </p>
      <p class="form_notifications__text" :class="{ '!text-left': inDialog }">
        Получите уведомление при выходе умного замка NFCKEY на рынок
      </p>
    </div>
    <div class="flex w-full max-w-lg items-center justify-center xl:justify-start" v-auto-animate>
      <form v-if="!isFormSubmitted" class="form_notifications" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem class="w-full max-w-sm" v-auto-animate>
            <FormControl>
              <Input
                type="email"
                placeholder="me@nfckey.tech"
                v-bind="componentField"
                class="pl-10"
              />
              <span class="absolute inset-y-0 start-0 px-2.5 pt-0.5">
                <Mail class="size-5 text-vneutral-400" />
              </span>
            </FormControl>
            <FormMessage class="sm:min-w-80" />
          </FormItem>
        </FormField>
        <Button type="submit" class="form_notifications__submit-btn"> Подписаться </Button>
      </form>
      <div v-if="isFormSubmitted" class="flex max-w-md flex-col gap-4">
        <p class="form_notifications__submit-title">Благодарим за проявленный интерес!</p>
        <p class="form_notifications__submit-text">
          Рекомендуем Вам подписаться на <a href="https://t.me/nfckey"> Telegram-канал NFCKEY </a>,
          чтобы не пропускать новости и следить за нашим прогрессом
        </p>
      </div>
    </div>
  </div>
</template>
