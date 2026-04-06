<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'

const { t } = useI18n()
const prefs = usePreferencesStore()

const isDark = computed(() => prefs.theme === 'dark')
const isEN = computed(() => prefs.locale === 'en')

const mobileOpen = ref(false)
const isInContactSection = ref(false)
const headerRef = ref<HTMLElement | null>(null)

let scrollListener: (() => void) | null = null

function checkNavbarCollision() {
  const header = headerRef.value
  const contactSection = document.getElementById('contact')
  
  if (!header || !contactSection) return
  
  const headerRect = header.getBoundingClientRect()
  const contactRect = contactSection.getBoundingClientRect()
  
  isInContactSection.value = headerRect.bottom >= contactRect.top
}

onMounted(() => {
  scrollListener = () => {
    checkNavbarCollision()
  }
  
  window.addEventListener('scroll', scrollListener, { passive: true })
  checkNavbarCollision() 
})

onUnmounted(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
})

const navbarClasses = computed(() => 
  isInContactSection.value ? 'opacity-0' : ''
)

const navLinks = computed(() => [
  { href: '#manifesto', label: t('nav.manifesto') },
  { href: '#buskasher', label: t('nav.projects') },
  { href: '#languages', label: t('nav.languages') },
  { href: '#contact', label: t('nav.contact') },
])

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 border-b border-ink-200/60 dark:border-ink-800/60 bg-ink-50/80 dark:bg-ink-950/80 backdrop-blur-md transition-opacity duration-300"
    :class="navbarClasses"
    role="banner" 
  >
    <nav
      class="section-container flex items-center justify-between h-16"
      aria-label="Navegação principal"
    >
      <!-- Logo / Name -->
      <a
        href="#"
        class="font-display font-semibold text-lg text-ink-900 dark:text-ink-50 tracking-tight hover:text-rust-500 dark:hover:text-rust-400 transition-colors"
        aria-label="Fernando Pinto - Início"
      >
        fp<span class="text-rust-500">.</span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="nav-link">{{ link.label }}</a>
        </li>
      </ul>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Locale Toggle -->
        <button
          @click="prefs.toggleLocale()"
          :aria-label="`Alternar idioma para ${isEN ? 'Português' : 'English'}`"
          :aria-pressed="isEN"
          class="relative inline-flex items-center h-8 rounded-full px-1 gap-0.5 bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-rust-400 dark:hover:border-rust-500 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-rust-500"
        >
          <span
            class="px-2 py-0.5 rounded-full text-xs font-mono font-medium transition-all duration-200"
            :class="!isEN
              ? 'bg-rust-500 text-white'
              : 'text-ink-500 dark:text-ink-400'"
          >PT</span>
          <span
            class="px-2 py-0.5 rounded-full text-xs font-mono font-medium transition-all duration-200"
            :class="isEN
              ? 'bg-rust-500 text-white'
              : 'text-ink-500 dark:text-ink-400'"
          >EN</span>
        </button>

        <!-- Theme Toggle -->
        <button
          @click="prefs.toggleTheme()"
          :aria-label="`Ativar modo ${isDark ? 'claro' : 'escuro'}`"
          :aria-pressed="isDark"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-rust-400 dark:hover:border-rust-500 text-ink-600 dark:text-ink-300 hover:text-rust-500 dark:hover:text-rust-400 transition-all duration-200"
        >
          <!-- Sun icon -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          <!-- Moon icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 transition-all"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          aria-label="Menu de navegação"
        >
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden border-t border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-950"
      >
        <ul class="section-container py-4 flex flex-col gap-1" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click="closeMobile"
              class="block py-2.5 px-3 rounded-lg text-sm font-medium text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 hover:text-rust-500 transition-colors"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
