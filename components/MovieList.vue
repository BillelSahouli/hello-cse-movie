<script setup lang="ts">
import type { Movie } from '../domain/models/movie'
import MovieCard from "~~/components/MovieCard.vue";

defineProps<{
  movies: Movie[]
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
    />
  </div>
</template>