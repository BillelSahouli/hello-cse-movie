import { useRuntimeConfig } from "nuxt/app"

/**
 * Client simple pour appeler l'API TMDB
 * Centralise les appels HTTP
 */
export const useTmdbClient = () => {
  const config = useRuntimeConfig()

  const baseUrl = 'https://api.themoviedb.org/3'

  /**
   * Récupère les films populaires
   * @param page numéro de page pour pagination
   */
  const getPopularMovies = async (page: number = 1) => {
    return await $fetch(`${baseUrl}/movie/popular`, {
      params: {
        api_key: config.public.tmdbApiKey,
        page,
      },
    })
  }

  return {
    getPopularMovies,
  }
}