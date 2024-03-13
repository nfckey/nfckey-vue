<script setup>
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import * as z from 'zod'
import axios from 'axios'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const isFormSubmitted = ref(false)

const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({
        required_error: 'Поле является обязательным',
        invalid_type_error: 'Имя должно быть записано в виде строки'
      })
      .min(1, { message: 'Поле является обязательным' }),
    email: z
      .string({
        required_error: 'Поле является обязательным',
        invalid_type_error: 'Email должен быть записан в виде строки'
      })
      .email({ message: 'Неверный формат адреса электронной почты' }),
    phone: z
      .union([
        z.string(),
        z
          .string()
          .regex(
            new RegExp(
              /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
            ),
            'Неверный формат номера телефона'
          )
      ])
      .optional()
      .transform((e) => (e === '' ? undefined : e))
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
      'entry.943275183': values.name,
      'entry.603433018': values.email,
      'entry.1382780879': values.phone
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
  <div class="flex items-center justify-center" v-auto-animate>
    <form v-if="!isFormSubmitted" class="pre-order-form w-96 space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem v-auto-animate>
          <FormLabel>Имя</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Иван Иванов" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem v-auto-animate>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="text" placeholder="me@nfckey.tech" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="phone">
        <FormItem v-auto-animate>
          <FormLabel>Телефон</FormLabel>
          <FormControl>
            <Input type="text" placeholder="+7 (123) 456-78-90" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" class="pre-order-form__submit-btn"> Отправить </Button>
    </form>
    <div v-if="isFormSubmitted" class="flex flex-col gap-4">
      <p class="pre-order-form__submit-title">Спасибо за проявленный интерес!</p>
      <p class="pre-order-form__submit-text">
        Мы сохранили Вашу заявку и уведомим Вас заранее при выходе замка NFCKEY на рынок
      </p>
    </div>
  </div>
</template>
