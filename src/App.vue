<script setup>
import { computed, reactive } from 'vue'
import { RouterView } from 'vue-router'

import { onMounted } from 'vue'
import { useMoviesStore } from '../src/stores/movies'

const store = useMoviesStore()

onMounted(() => {
  store.fetchMovies()
})

const getMovies = computed(() => {
  return store.getMovies
})

// eslint-disable-next-line no-unused-vars
const state = reactive({
  menuBox: 'none',
  searchInput: '',
})
</script>

<template>
  <RouterView />

  <ul>
    <li v-for="movie in getMovies" :key="movie">
      {{ movie.title }}
      {{ movie.release_date }}
      {{ movie.vote_average }}
      <!-- {{ movie.genre }} -->
      {{ movie.price }}
      {{ movie.poster_path }}
    </li>
  </ul>
</template>
