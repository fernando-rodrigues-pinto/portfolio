<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 border-t border-ink-800 bg-ink-900 dark:bg-ink-950" role="contentinfo">
    <div class="section-container flex flex-col md:flex-row items-center justify-between gap-3">
      <p class="text-xs font-mono text-ink-600">
        {{ t('footer.built_with') }}
      </p>
      <p class="text-xs font-mono text-ink-600">
        {{ year }} · {{ t('footer.rights') }}
      </p>
    </div>
  </footer>
</template>
