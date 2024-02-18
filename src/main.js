import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomeView from './views/HomeView.vue'
import FaqView from './views/FaqView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/faq', name: 'faq', component: FaqView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
