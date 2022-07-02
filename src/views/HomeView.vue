<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import CardComponent from '../components/CardComponent.vue'

// eslint-disable-next-line no-unused-vars
const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
</script>

<template>
  <main
    class="w-full flex flex-row flex-wrap px-16 py-24 gap-12 justify-center"
    :onclick="() => appDataStore.hideMenus()"
  >
    <CardComponent
      :movie="movie"
      :key="movie.id"
      v-for="movie in moviesStore.getFilteredMovies"
    />
  </main>
</template>
