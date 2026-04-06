<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersection } from '@/composables/useIntersection'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useIntersection(sectionRef)

const stats = [
  { key: 'stat_1' },
  { key: 'stat_2' },
]
</script>

<template>
  <section
    id="manifesto"
    ref="sectionRef"
    class="py-32 relative overflow-hidden"
    aria-labelledby="manifesto-heading"
  >
    <!-- Left decorative bar -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-rust-500 to-transparent transition-opacity duration-700"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
      aria-hidden="true"
    ></div>

    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Left: Typography -->
        <div
          class="transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <p class="font-mono text-xs text-rust-500 tracking-widest uppercase mb-6">
            — Manifesto
          </p>

          <h2
            id="manifesto-heading"
            class="font-display text-5xl md:text-6xl font-black text-ink-900 dark:text-ink-50 leading-tight mb-5"
          >
            {{ t('manifesto.headline') }}
          </h2>
          <h2 class="font-display text-5xl md:text-6xl font-black italic text-rust-500 leading-tight mb-10">
            {{ t('manifesto.headline_em') }}
          </h2>

          <p class="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mb-5">
            {{ t('manifesto.body_1') }}
          </p>
          <p class="text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
            {{ t('manifesto.body_2') }}
          </p>
        </div>

        <!-- Right: Stats + Quote -->
        <div
          class="transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <!-- Stats grid -->
          <div class="grid grid-cols-3 gap-4 mb-10">
            <div
              v-for="stat in stats"
              :key="stat.key"
              class="p-5 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900/60 text-center group hover:border-rust-500/50 dark:hover:border-rust-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <p class="font-display text-3xl font-black text-ink-900 dark:text-ink-50 mb-1 group-hover:text-rust-500 transition-colors duration-300">
                {{ t(`manifesto.${stat.key}_value`) }}
              </p>
              <p class="text-xs font-mono text-ink-500 dark:text-ink-400 uppercase tracking-wider">
                {{ t(`manifesto.${stat.key}_label`) }}
              </p>
            </div>
          </div>

          <!-- Quote block -->
          <blockquote class="relative pl-6 border-l-2 border-rust-500">
            <p class="font-display text-xl italic text-ink-700 dark:text-ink-200 leading-relaxed">
              {{ t('manifesto.quote') }}
            </p>
            <footer class="mt-3">
              <cite class="text-sm font-mono not-italic text-ink-400 dark:text-ink-500">
                — Antoine De Saint-Exupéry
              </cite>
            </footer>
          </blockquote>

          <!-- Decorative grid pattern -->
          <div class="mt-10 grid grid-cols-8 gap-2 opacity-20 dark:opacity-10" aria-hidden="true">
            <div
              v-for="i in 24" :key="i"
              class="aspect-square rounded-sm"
              :class="i % 7 === 0 || i % 11 === 0 ? 'bg-rust-500' : 'bg-ink-300 dark:bg-ink-600'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
