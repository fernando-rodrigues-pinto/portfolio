<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ManifestoSection from '@/components/ManifestoSection.vue'
import BuskasherSection from '@/components/BuskasherSection.vue'
import LanguagesSection from '@/components/LanguagesSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'

const prefs = usePreferencesStore()
const { locale } = useI18n()

// Sync Pinia locale → vue-i18n locale
watch(() => prefs.locale, (val) => {
  locale.value = val
}, { immediate: true })
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main id="main-content">
      <HeroSection />
      <ManifestoSection />
      <BuskasherSection />
      <LanguagesSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
