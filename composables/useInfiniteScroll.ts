import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Infinite scroll simple avec IntersectionObserver
 */
export const useInfiniteScroll = (callback: () => void) => {
    const sentinel = ref<HTMLElement | null>(null)

    let observer: IntersectionObserver | null = null

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            // si l'élément est visible → on charge plus
            if (entry.isIntersecting) {
                callback()
            }
        })

        if (sentinel.value) {
            observer.observe(sentinel.value)
        }
    })

    onUnmounted(() => {
        if (observer && sentinel.value) {
            observer.unobserve(sentinel.value)
        }
    })

    return {
        sentinel,
    }
}