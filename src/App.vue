<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useMoviesStore } from '../src/stores/movies'

import NavbarComponent from './components/NavbarComponent.vue'
import MenuBox from './components/MenuBox.vue'

const store = useMoviesStore()

onMounted(() => {
  store.fetchMovies()
})
</script>

<template>
  <NavbarComponent />
  <MenuBox />
  <RouterView />
</template>
