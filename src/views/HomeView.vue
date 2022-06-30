<script setup>
import { useMoviesStore } from '../stores/movies'
import CardComponent from '../components/CardComponent.vue'

const moviesStore = useMoviesStore()
</script>

<template>
  <div class="cards">
    <div v-for="movie in moviesStore.getFilteredMovies" :key="movie.title">
      <CardComponent :movie="movie" />
    </div>
  </div>
</template>

<style scoped></style>
