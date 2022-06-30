<!-- Props strategy -->

<script setup>
import { computed } from 'vue'
import CardComponent from '../components/CardComponent.vue'
import { isInCart, isInFavorites } from '../hooks'
import { useMoviesStore } from '../stores/movies'

const store = useMoviesStore()
const movies = computed(() => {
  return store.getMovies
})
const addToFavorites = (movieTitle) => store.addToFavorites(movieTitle)
const addToCart = (movieTitle) => store.addToCart(movieTitle)
const deleteFavorite = (movieTitle) => store.deleteFavorite(movieTitle)
const deleteCartItem = (movieTitle) => store.deleteCartItem(movieTitle)
</script>

<template>
  <div class="cards">
    <div v-for="movie in movies" :key="movie.title">
      <CardComponent
        :movie="movie"
        :isInCart="isInCart"
        :isInFavorites="isInFavorites"
        :addToFavorites="addToFavorites"
        :addToCart="addToCart"
        :deleteFavorite="deleteFavorite"
        :deleteCartItem="deleteCartItem"
      />
    </div>
  </div>
</template>

<style scoped></style>
