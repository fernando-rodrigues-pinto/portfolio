import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'
export type Locale = 'pt' | 'en'

export const usePreferencesStore = defineStore('preferences', () => {
  // --- State ---
  const theme = ref<Theme>(
    (localStorage.getItem('fp-theme') as Theme) ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  const locale = ref<Locale>(
    (localStorage.getItem('fp-locale') as Locale) ?? 'pt'
  )

  // --- Actions ---
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function toggleLocale() {
    locale.value = locale.value === 'pt' ? 'en' : 'pt'
  }

  function setLocale(l: Locale) {
    locale.value = l
  }

  // --- Side effects ---
  watch(theme, (val) => {
    localStorage.setItem('fp-theme', val)
    document.documentElement.classList.toggle('dark', val === 'dark')
  }, { immediate: true })

  watch(locale, (val) => {
    localStorage.setItem('fp-locale', val)
    document.documentElement.setAttribute('lang', val === 'pt' ? 'pt-BR' : 'en')
  }, { immediate: true })

  return { theme, locale, toggleTheme, toggleLocale, setLocale }
})
