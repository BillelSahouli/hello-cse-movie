<script setup lang="ts">
import {useTmdbClient} from "~~/infrastructure/api/tmdb.client";

const { getPopularMovies } = useTmdbClient()

const movies = ref<any[]>([])

/**
 * Test API au chargement
 */
onMounted(async () => {
  try {
    const response: any = await getPopularMovies(1)

    console.log('🎬 TMDB response:', response)

    movies.value = response.results
  } catch (error) {
    console.error('❌ API error:', error)
  }
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Test TMDB</h1>

    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>