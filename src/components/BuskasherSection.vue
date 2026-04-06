<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersection } from '@/composables/useIntersection'
import ImageGallery from './ImageGallery.vue'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useIntersection(sectionRef)

// Using placeholder images that represent a finance dashboard
const galleryImages = [
  {
    id: 1,
    src: '../../src/assets/products-cards.png',
    alt: 'Busca de produtos com exibição no modo "Card"',
    caption: 'Busca de Produtos - Cards',
  },
  {
    id: 2,
    src: '../../src/assets/products-list.png',
    alt: 'Busca de produtos com exibição no modo "Lista"',
    caption: 'Busca de Produtos - Lista',
  },
  {
    id: 3,
    src: '../../src/assets/products-details.png',
    alt: 'Detalhes de um produto específico',
    caption: 'Detalhes do Produto',
  }
]

const techStack = ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'REST APIs']
</script>

<template>
  <section
    id="buskasher"
    ref="sectionRef"
    class="py-32 bg-ink-100/50 dark:bg-ink-900/30"
    aria-labelledby="buskasher-heading"
  >
    <div class="section-container">
      <!-- Header -->
      <div
        class="mb-16 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-mono text-xs text-rust-500 tracking-widest uppercase mb-8">
          — {{ t('buskasher.tag') }}
        </p>

        <!-- 2x2 Grid Layout -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Column 1 -->
          <div class="flex flex-col gap-8">
            <!-- Row 1: Title + Subtitle -->
            <div>
              <h2
                id="buskasher-heading"
                class="font-display text-5xl md:text-6xl font-black text-ink-900 dark:text-ink-50 leading-none mb-2"
              >
                {{ t('buskasher.title') }}
              </h2>
              <p class="font-display text-xl italic text-rust-500">
                {{ t('buskasher.subtitle') }}
              </p>
            </div>

            <!-- Row 2: Description -->
            <p class="text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
              {{ t('buskasher.description') }}
            </p>
          </div>

          <!-- Column 2 -->
          <div class="flex flex-col gap-10">
            <!-- Row 1: Status badges -->
            <div class="flex flex-col gap-2 w-fit">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-400 text-sm font-medium">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                {{ t('buskasher.status_v1') }}
              </span>
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 text-sm font-medium">
                <span class="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true"></span>
                {{ t('buskasher.status_v2') }}
              </span>
            </div>

            <!-- Row 2: Tech Stack -->
            <div>
              <p class="font-mono text-xs text-ink-400 dark:text-ink-500 uppercase tracking-wider mb-3">
                {{ t('buskasher.tech_label') }}
              </p>
              <div class="flex flex-wrap gap-2" :aria-label="t('buskasher.tech_label')">
                <span
                  v-for="tech in techStack"
                  :key="tech"
                  class="px-3 py-1 rounded-lg text-sm font-mono bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-300 border border-ink-200 dark:border-ink-700"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div
        class="transition-all duration-700 delay-200"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-mono text-xs text-ink-400 dark:text-ink-500 uppercase tracking-wider mb-5">
          {{ t('buskasher.gallery_label') }}
        </p>
        <ImageGallery :images="galleryImages" />
      </div>

      <!-- NDA Notice -->
      <div
        class="mt-12 transition-all duration-700 delay-300"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="text-left text-ink-500 dark:text-ink-400 text-sm leading-relaxed">
          {{ t('buskasher.nda_notice') }}
        </p>
      </div>
    </div>
  </section>
</template>
