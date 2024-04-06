import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import AboutView from './views/AboutView.vue'
import FaqView from './views/FaqView.vue'
import HomeView from './views/HomeView.vue'
import LandlordsView from './views/LandlordsView.vue'
import PersonalView from './views/PersonalView.vue'
import PricingView from './views/PricingView.vue'
import PrivacyView from './views/PrivacyView.vue'
import NotFoundView from './views/NotFoundView.vue'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundView },
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/faq', name: 'faq', component: FaqView },
  { path: '/landlords', name: 'landlords', component: LandlordsView },
  { path: '/personal', name: 'personal', component: PersonalView },
  { path: '/pricing', name: 'pricing', component: PricingView },
  { path: '/privacy', name: 'privacy', component: PrivacyView }
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

const app = createApp(App)

app.use(router)

app.mount('#app')
