<script setup lang="ts">
import MovieList from "~~/components/MovieList.vue";
import {useMovies} from "~~/composables/useMovies";

const { movies, fetchMovies, loading } = useMovies()

onMounted(fetchMovies)
</script>

<template>
  <div class="p-6">
    <h1>Films populaires</h1>

    <p v-if="loading">Loading...</p>

    <MovieList :movies="movies" />
  </div>
</template>