import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'NFCKEY - Умные дверные замки с технологией NFC' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'О проекте - NFCKEY' }
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FaqView.vue'),
    meta: { title: 'Часто задаваемые вопросы - NFCKEY' }
  },
  {
    path: '/landlords',
    name: 'landlords',
    component: () => import('@/views/LandlordsView.vue'),
    meta: { title: 'NFCKEY для арендодателей' }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/views/PricingView.vue'),
    meta: { title: 'Подписка - NFCKEY' }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue'),
    meta: { title: 'Политика конфиденциальности - NFCKEY' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Страница не найдена - NFCKEY' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? 'NFCKEY'

  const baseUrl = 'https://nfckey.tech'
  const canonicalUrl = `${baseUrl}${to.path}`

  let link = document.querySelector("link[rel='canonical']")

  if (link) {
    link.setAttribute('href', canonicalUrl)
  } else {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', canonicalUrl)
    document.head.appendChild(link)
  }

  next()
})

const app = createApp(App)

app.use(router)

app.mount('#app')
