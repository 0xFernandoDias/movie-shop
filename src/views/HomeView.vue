<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import CardComponent from '../components/CardComponent.vue'

// eslint-disable-next-line no-unused-vars
const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
</script>

<template>
  <main class="w-full flex flex-row flex-wrap px-32 py-32 gap-12">
    <CardComponent
      :movie="movie"
      v-for="movie in moviesStore.getFilteredMovies"
      :key="movie.release_date"
    />
  </main>
</template>
