<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useModal } from '@/composables/useModal'

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption?: string
}

const props = defineProps<{
  images: GalleryImage[]
  initialIndex?: number
}>()

const { t } = useI18n()
const { dialogRef, isOpen, open, close, handleBackdropClick, handleKeydown } = useModal()

const currentIndex = ref(0)
const currentImage = computed(() => props.images[currentIndex.value])

function openAt(index: number) {
  currentIndex.value = index
  open()
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function handleDialogKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
  handleKeydown(e)
}

// Expose openAt for parent
defineExpose({ openAt })
</script>

<template>
  <!-- Gallery grid -->
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
    <button
      v-for="(image, index) in images"
      :key="image.id"
      @click="openAt(index)"
      class="group relative aspect-video rounded-xl overflow-hidden bg-ink-200 dark:bg-ink-800 focus-visible:ring-2 focus-visible:ring-rust-500 focus-visible:ring-offset-2"
      :aria-label="`${image.alt} — ${t('buskasher.click_hint')}`"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        loading="lazy"
      />
      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/40 transition-all duration-300 flex items-center justify-center" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28" height="28"
          viewBox="0 0 24 24"
          fill="none" stroke="white"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"
          aria-hidden="true"
        >
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </div>
    </button>
  </div>

  <!-- Modal Dialog -->
  <dialog
    ref="dialogRef"
    class="w-full max-w-5xl rounded-2xl bg-ink-950 border border-ink-800 shadow-2xl p-0 overflow-hidden"
    :aria-label="currentImage?.alt"
    @click="handleBackdropClick"
    @keydown="handleDialogKeydown"
  >
    <div class="relative flex flex-col">
      <!-- Modal Header -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-ink-800">
        <div class="flex items-center gap-3">
          <span class="font-mono text-xs text-ink-400">
            {{ currentIndex + 1 }} / {{ images.length }}
          </span>
          <span v-if="currentImage?.caption" class="text-sm text-ink-300">
            {{ currentImage.caption }}
          </span>
        </div>
        <button
          @click="close"
          class="w-8 h-8 flex items-center justify-center rounded-full text-ink-400 hover:text-white hover:bg-ink-800 transition-all"
          :aria-label="t('buskasher.modal_close')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Modal Image -->
      <div class="relative bg-ink-900">
        <img
          :src="currentImage?.src"
          :alt="currentImage?.alt"
          class="w-full max-h-[70vh] object-contain"
        />

        <!-- Prev / Next -->
        <button
          v-if="images.length > 1"
          @click.stop="prev"
          class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-ink-950/80 text-white hover:bg-rust-500 transition-all"
          :aria-label="t('buskasher.modal_prev')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button
          v-if="images.length > 1"
          @click.stop="next"
          class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-ink-950/80 text-white hover:bg-rust-500 transition-all"
          :aria-label="t('buskasher.modal_next')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      <!-- Thumbnail strip -->
      <div class="flex gap-2 p-4 overflow-x-auto bg-ink-950/80" v-if="images.length > 1">
        <button
          v-for="(img, i) in images"
          :key="img.id"
          @click.stop="currentIndex = i"
          class="flex-shrink-0 w-14 h-10 rounded overflow-hidden transition-all duration-200"
          :class="i === currentIndex
            ? 'ring-2 ring-rust-500 opacity-100'
            : 'opacity-40 hover:opacity-70'"
          :aria-label="`Ver ${img.alt}`"
          :aria-current="i === currentIndex ? 'true' : undefined"
        >
          <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  </dialog>
</template>
