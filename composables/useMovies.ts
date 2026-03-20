import { ref } from 'vue'
import {useTmdbClient} from "../infrastructure/api/tmdb.client";
import {Movie} from "../domain/models/movie";

/**
 * Gère la récupération des films populaires
 * + pagination (utile pour infinite scroll ensuite)
 */
export const useMovies = () => {
    const movies = ref<Movie[]>([])
    const page = ref(1)
    const loading = ref(false)
    const hasMore = ref(true)

    const { getPopularMovies } = useTmdbClient()

    /**
     * Charge les films populaires
     * concatène les résultats (important pour infinite scroll)
     */
    const fetchMovies = async () => {
        if (loading.value || !hasMore.value) return

        loading.value = true

        try {
            const response: any = await getPopularMovies(page.value)

            movies.value.push(...response.results)

            // Vérifie s'il reste des pages
            hasMore.value = page.value < response.total_pages

            page.value++
        } catch (error) {
            console.error('Erreur lors du fetch des films', error)
        } finally {
            loading.value = false
        }
    }

    return {
        movies,
        loading,
        fetchMovies,
    }
}