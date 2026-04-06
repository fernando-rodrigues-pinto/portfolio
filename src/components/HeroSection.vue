<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    class="relative min-h-screen flex items-center pt-6 overflow-hidden grain-overlay"
    aria-label="Apresentação"
  >
    <!-- Background decorations -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <!-- Large serif letter -->
      <span class="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[30vw] font-black text-ink-100 dark:text-ink-900/60 select-none leading-none opacity-60">
        F
      </span>
      <!-- Rust accent line -->
      <div class="absolute left-0 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-rust-500 to-transparent opacity-60"></div>
    </div>

    <div class="section-container relative z-10 py-24">
      <div class="max-w-3xl">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-200 dark:border-ink-700 bg-white/60 dark:bg-ink-900/60 backdrop-blur-sm mb-8 opacity-0 animate-fade-up animate-fill-both"
        >
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
          <span class="text-xs font-mono text-ink-600 dark:text-ink-300">{{ t('hero.badge') }}</span>
        </div>

        <!-- Greeting -->
        <p class="font-mono text-sm text-rust-500 tracking-widest uppercase mb-3 opacity-0 animate-fade-up animate-fill-both animate-delay-100">
          {{ t('hero.greeting') }}
        </p>

        <!-- Name -->
        <h1 class="font-display text-6xl md:text-8xl font-black text-ink-900 dark:text-ink-50 leading-none tracking-tight mb-4 opacity-0 animate-fade-up animate-fill-both animate-delay-200">
          {{ t('hero.name') }}
        </h1>

        <!-- Role -->
        <p class="font-display text-2xl md:text-3xl font-light italic text-rust-500 mb-6 opacity-0 animate-fade-up animate-fill-both animate-delay-300">
          {{ t('hero.role') }}
        </p>

        <!-- Tagline -->
        <p class="text-lg text-ink-600 dark:text-ink-300 max-w-xl leading-relaxed mb-10 text-balance opacity-0 animate-fade-up animate-fill-both animate-delay-400">
          {{ t('hero.tagline') }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 opacity-0 animate-fade-up animate-fill-both animate-delay-500">
          <a
            href="#buskasher"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-900 dark:bg-ink-50 text-white dark:text-ink-900 font-medium hover:bg-rust-500 dark:hover:bg-rust-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rust-500/20"
          >
            {{ t('hero.cta_primary') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </div>

        <!-- Stack chips -->
        <div class="flex flex-wrap gap-2 mt-10 opacity-0 animate-fade-up animate-fill-both animate-delay-600" aria-label="Stack tecnológica">
          <span v-for="tech in ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vite']" :key="tech"
            class="px-3 py-1 rounded-full text-xs font-mono bg-ink-100 dark:bg-ink-800/80 text-ink-500 dark:text-ink-400 border border-ink-200/80 dark:border-ink-700/80"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up animate-fill-both animate-delay-600" aria-hidden="true">
      <span class="text-xs font-mono text-ink-400 dark:text-ink-600 tracking-widest uppercase">scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-ink-400 dark:from-ink-600 to-transparent"></div>
    </div>
  </section>
</template>
