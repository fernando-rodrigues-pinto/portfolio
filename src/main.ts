import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/main.css'
import pt from './locales/pt.json'
import en from './locales/en.json'

const pinia = createPinia()

const i18n = createI18n({
  legacy: false,
  locale: (localStorage.getItem('fp-locale') as 'pt' | 'en') ?? 'pt',
  fallbackLocale: 'pt',
  messages: { pt, en },
})

createApp(App).use(pinia).use(i18n).mount('#app')
