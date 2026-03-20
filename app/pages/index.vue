<script setup lang="ts">
import {useInfiniteScroll} from "~~/composables/useInfiniteScroll";
import MovieList from "~~/components/MovieList.vue";
import {useMovies} from "~~/composables/useMovies";

const { movies, fetchMovies, loading } = useMovies()

// chargement initial
onMounted(fetchMovies)

// infinite scroll
const { sentinel } = useInfiniteScroll(fetchMovies)
</script>

<template>
  <div class="p-6">
    <h1>Films populaires</h1>

    <p v-if="loading">Loading...</p>

    <MovieList :movies="movies" />
    <div ref="sentinel" class="h-20"></div>
  </div>
</template>