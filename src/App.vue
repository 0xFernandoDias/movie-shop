<script setup>
/* eslint-disable no-unused-vars */
import { reactive, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useMoviesStore } from '../src/stores/movies'
import { useUserRegisterStore } from '../src/stores/userRegister'
import { isInCart, isInFavorites } from '../src/hooks'
import {
  handleNavbarIconsClick,
  handleMenuBoxSubmit,
  handleCheckoutSubmit,
  handleModalSubmit,
} from '../src/helpers'

const {
  getMovies,
  getCart,
  getFavorites,
  getCartItemsQuantity,
  getFavoritesQuantity,
  getTotalPrice,
  addToCart,
  addToFavorites,
  deleteAllCartItems,
  deleteAllFavorites,
  deleteCartItem,
  deleteFavorite,
  fetchMovies,
} = useMoviesStore()

const { getUserName, resetUserRegister } = useUserRegisterStore

onMounted(() => {
  fetchMovies()
})

const state = reactive({
  menuBox: 'none',
  searchInput: '',
  filteredMovies: [],
})
</script>

<template>
  <RouterView />

  <ul>
    <li v-for="movie in getMovies" :key="movie.title">
      {{ movie.title }}
      {{ movie.release_date }}
      {{ movie.vote_average }}
      {{ movie.media_type }}
      {{ movie.price }}
      {{ movie.poster_path }}
    </li>
  </ul>
</template>
