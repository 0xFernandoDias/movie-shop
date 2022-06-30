<script setup>
import { useMoviesStore } from '../stores/movies'
import CardComponent from '../components/CardComponent.vue'

const moviesStore = useMoviesStore()
</script>

<template>
  <main class="cards flex-wrap">
    <CardComponent
      :movie="movie"
      v-for="movie in moviesStore.getFilteredMovies"
      :key="movie.title"
    />
  </main>
</template>

<style scoped></style>
