<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersection } from '@/composables/useIntersection'
import { usePreferencesStore } from '@/stores/preferences'

const { t } = useI18n()
const prefs = usePreferencesStore()
const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useIntersection(sectionRef)
</script>

<template>
  <section
    id="languages"
    ref="sectionRef"
    class="py-32"
    aria-labelledby="languages-heading"
  >
    <div class="section-container">
      <!-- Header -->
      <div
        class="mb-16 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-mono text-xs text-rust-500 tracking-widest uppercase mb-3">
          — {{ t('languages.tag') }}
        </p>
        <h2
          id="languages-heading"
          class="font-display text-5xl md:text-6xl font-black text-ink-900 dark:text-ink-50"
        >
          {{ t('languages.title') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <!-- Portuguese card -->
        <div
          class="relative p-8 rounded-2xl border-2 border-rust-500/40 dark:border-rust-500/30 bg-white dark:bg-ink-900/60 overflow-hidden group transition-all duration-700 delay-100 hover:border-rust-500/70"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <div class="relative flex items-start justify-between mb-6">
            <div class="flex items-center gap-3">
              <span class="text-3xl" role="img" :aria-label="t('languages.portuguese_label')">🇧🇷</span>
              <div>
                <h3 class="font-display text-xl font-bold text-ink-900 dark:text-ink-50">
                  {{ t('languages.portuguese_label') }}
                </h3>
                <p class="text-sm font-medium text-rust-500 font-mono">
                  {{ t('languages.portuguese_level') }}
                </p>
              </div>
            </div>
            <!-- Featured badge -->
            <span class="px-2 py-1 rounded-md text-xs font-mono bg-rust-500/10 text-rust-500 border border-rust-500/30 uppercase tracking-wider">
              C2
            </span>
          </div>

          <p class="relative text-ink-600 dark:text-ink-300 text-sm leading-relaxed mb-5">
            {{ t('languages.portuguese_detail') }}
          </p>

          <!-- Progress bar -->
          <div
            class="relative h-2 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="`${t('languages.portuguese_label')}: ${t('languages.portuguese_level')}`"
          >
            <div
              class="h-full rounded-full bg-gradient-to-r from-rust-400 to-rust-600 transition-all duration-1000 delay-300"
              :style="{ width: isVisible ? '100%' : '0%' }"
            ></div>
          </div>
        </div>

        <!-- English card — featured -->
        <div
          class="relative p-8 rounded-2xl border-2 border-rust-500/40 dark:border-rust-500/30 bg-white dark:bg-ink-900/60 overflow-hidden group transition-all duration-700 delay-200 hover:border-rust-500/70"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <div class="relative flex items-start justify-between mb-6">
            <div class="flex items-center gap-3">
              <span class="text-3xl" role="img" :aria-label="t('languages.english_label')">🇺🇸</span>
              <div>
                <h3 class="font-display text-xl font-bold text-ink-900 dark:text-ink-50">
                  {{ t('languages.english_label') }}
                </h3>
                <p class="text-sm font-medium text-rust-500 font-mono">
                  {{ t('languages.english_level') }}
                </p>
              </div>
            </div>
            <!-- Featured badge -->
            <span class="px-2 py-1 rounded-md text-xs font-mono bg-rust-500/10 text-rust-500 border border-rust-500/30 uppercase tracking-wider">
              C1
            </span>
          </div>

          <p class="relative text-ink-600 dark:text-ink-300 text-sm leading-relaxed mb-5">
            {{ t('languages.english_detail') }}
          </p>

          <!-- Progress bar -->
          <div
            class="relative h-2 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="`${t('languages.english_label')}: ${t('languages.english_level')}`"
          >
            <div
              class="h-full rounded-full bg-gradient-to-r from-rust-400 to-rust-600 transition-all duration-1000 delay-500"
              :style="{ width: isVisible ? '92%' : '0%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Tech Note card -->
      <div
        class="mt-8 p-8 rounded-2xl border border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/40 transition-all duration-700 delay-300"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex flex-col md:flex-row gap-6 items-start">
          <!-- Icon -->
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-rust-500/10 border border-rust-500/20 flex items-center justify-center" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rust-500">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>

          <div class="flex-1">
            <h3 class="font-display text-lg font-bold text-ink-900 dark:text-ink-50 mb-2">
              {{ t('languages.tech_note_title') }}
            </h3>
            <p class="text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
              {{ t('languages.tech_note_body') }}
            </p>
            <div class="flex items-center gap-3">
              <p class="text-sm font-mono text-rust-500">
                {{ t('languages.toggle_hint') }}
              </p>
              <!-- Live indicator -->
              <button
                @click="prefs.toggleLocale()"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rust-500 text-white text-xs font-mono hover:bg-rust-600 transition-colors"
              >
                {{ prefs.locale.toUpperCase() }}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
