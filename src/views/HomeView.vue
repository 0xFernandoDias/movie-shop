<!-- Props strategy -->

<script setup>
import { computed } from 'vue'
import CardComponent from '../components/CardComponent.vue'
import { useMoviesStore } from '../stores/movies'

const store = useMoviesStore()
const movies = computed(() => {
  return store.getMovies
})
</script>

<template>
  <div class="cards">
    <div v-for="movie in movies" :key="movie.title">
      <CardComponent :movie="movie" />
    </div>
  </div>
</template>

<style scoped></style>
