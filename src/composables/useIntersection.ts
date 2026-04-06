import { ref, onMounted, onUnmounted, type Ref } from 'vue'

interface UseIntersectionOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useIntersection(
  target: Ref<HTMLElement | null>,
  options: UseIntersectionOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (once && observer && target.value) {
            observer.unobserve(target.value)
          }
        } else if (!once) {
          isVisible.value = false
        }
      },
      { threshold, rootMargin }
    )

    if (target.value) {
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isVisible }
}
