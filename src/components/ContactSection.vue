<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersection } from '@/composables/useIntersection'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useIntersection(sectionRef)

const links = [
  {
    key: 'email',
    label: 'fernandopinto.frp@gmail.com',
    href: 'mailto:fernandopinto.frp@gmail.com',
    icon: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
  },
  {
    key: 'github',
    label: 'github.com/fernando-rodrigues-pinto',
    href: 'https://github.com/fernando-rodrigues-pinto',
    icon: `<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>`,
  },
  {
    key: 'linkedin',
    label: 'linkedin.com/in/fernando-pinto-a8857235a',
    href: 'https://www.linkedin.com/in/fernando-pinto-a8857235a/',
    icon: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>`,
  },
]
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="py-32 bg-ink-900 dark:bg-ink-950 relative overflow-hidden"
    aria-labelledby="contact-heading"
  >
    <!-- Decorative large text -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      <span class="font-display text-[20vw] font-black text-white/[0.03] select-none leading-none">
        Hello
      </span>
    </div>

    <div class="section-container relative z-10">
      <div
        class="max-w-2xl mx-auto text-center transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-mono text-xs text-rust-400 tracking-widest uppercase mb-6">
          — {{ t('contact.tag') }}
        </p>
        <h2
          id="contact-heading"
          class="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-6"
        >
          {{ t('contact.title') }}
        </h2>
        <p class="text-ink-300 text-lg leading-relaxed mb-14">
          {{ t('contact.body') }}
        </p>

        <!-- Links -->
        <div class="flex flex-col gap-3">
          <a
            v-for="link in links"
            :key="link.key"
            :href="link.href"
            :target="link.key !== 'email' ? '_blank' : undefined"
            :rel="link.key !== 'email' ? 'noopener noreferrer' : undefined"
            class="group flex items-center justify-between px-6 py-4 rounded-xl border border-ink-700 bg-ink-800/50 hover:border-rust-500/50 hover:bg-ink-800 transition-all duration-300"
            :aria-label="`${t(`contact.${link.key}_label`)}: ${link.label}`"
          >
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-lg bg-ink-700 group-hover:bg-rust-500/20 flex items-center justify-center transition-colors duration-300" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-ink-400 group-hover:text-rust-400 transition-colors" v-html="link.icon"></svg>
              </div>
              <div class="text-left">
                <p class="text-xs font-mono text-ink-500 uppercase tracking-wider">{{ t(`contact.${link.key}_label`) }}</p>
                <p class="text-sm text-ink-200 group-hover:text-white transition-colors">{{ link.label }}</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-ink-600 group-hover:text-rust-400 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
