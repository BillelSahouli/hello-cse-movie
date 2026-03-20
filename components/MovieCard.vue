<script setup lang="ts">
//  Ceci ne marche pas from '~/domain/models/movie'
import type { Movie } from '../domain/models/movie'

defineProps<{
  movie: Movie
}>()

const getImageUrl = (path: string | null) => {
  if (!path) return '/placeholder.png'
  return `https://image.tmdb.org/t/p/w500${path}`
}
</script>

<template>
  <div
      class="bg-gray-900 rounded-lg overflow-hidden shadow hover:scale-105 transition duration-200"
  >
    <img
        :src="getImageUrl(movie.poster_path)"
        :alt="movie.title"
        class="w-full h-72 object-cover"
    />

    <div class="p-3">
      <h2 class="text-white text-sm font-semibold line-clamp-2">
        {{ movie.title }}
      </h2>

      <p class="text-gray-400 text-xs mt-1">
        ⭐ {{ movie.vote_average.toFixed(1) }}
      </p>
    </div>
  </div>
</template>