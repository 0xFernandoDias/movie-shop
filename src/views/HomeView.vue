<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import CardComponent from '../components/CardComponent.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
</script>

<template>
  <main
    class="w-full flex flex-row flex-wrap justify-between px-32 py-16"
    :onclick="
      () => {
        appDataStore.menuBox = 'none'
      }
    "
  >
    <CardComponent
      :movie="movie"
      v-for="movie in moviesStore.getFilteredMovies"
      :key="movie.title"
    />
  </main>
</template>
