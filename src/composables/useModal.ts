import { ref, watch, onUnmounted } from 'vue'

export function useModal() {
  const dialogRef = ref<HTMLDialogElement | null>(null)
  const isOpen = ref(false)

  function open() {
    isOpen.value = true
    dialogRef.value?.showModal()
    document.body.style.overflow = 'hidden'
  }

  function close() {
    isOpen.value = false
    dialogRef.value?.close()
    document.body.style.overflow = ''
  }

  function handleBackdropClick(e: MouseEvent) {
    const rect = dialogRef.value?.getBoundingClientRect()
    if (rect && (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    )) {
      close()
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close()
  }

  onUnmounted(() => {
    document.body.style.overflow = ''
  })

  return { dialogRef, isOpen, open, close, handleBackdropClick, handleKeydown }
}
