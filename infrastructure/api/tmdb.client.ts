export const useTmdbClient = () => {
  const config = useRuntimeConfig()

  const baseUrl = 'https://api.themoviedb.org/3'

  const getPopularMovies = async (page: number = 1) => {
    return await $fetch(`${baseUrl}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${config.public.tmdbApiKey}`,
      },
      query: {
        page,
      },
    })
  }

  return {
    getPopularMovies,
  }
}