<script setup>
import { reactive, onMounted, computed } from 'vue'
import { RouterView } from 'vue-router'
import { useMoviesStore } from '../src/stores/movies'
import { handleNavbarIconsClick, handleMenuBoxSubmit } from '../src/helpers'
import NavbarComponent from './components/NavbarComponent.vue'
import MenuBox from './components/MenuBox.vue'

const store = useMoviesStore()

onMounted(() => {
  store.fetchMovies()
})

const favoritesQuantity = computed(() => {
  return store.getFavoritesQuantity
})
const cartItemsQuantity = computed(() => {
  return store.getCartItemsQuantity
})
const favorites = computed(() => {
  return store.getFavorites
})
const cart = computed(() => {
  return store.getCart
})
const totalPrice = computed(() => {
  return store.getTotalPrice
})
const deleteAllFavorites = () => store.deleteAllFavorites()
const deleteAllCartItems = () => store.deleteAllCartItems()
const deleteFavorite = (movieTitle) => store.deleteFavorite(movieTitle)
const deleteCartItem = (movieTitle) => store.deleteCartItem(movieTitle)
const addToCart = (movieTitle) => store.addToCart(movieTitle)

const state = reactive({
  menuBox: 'none',
  searchInput: '',
  filteredMovies: [],
})
</script>

<template>
  <NavbarComponent
    :searchInput="state.searchInput"
    :favoritesQuantity="favoritesQuantity"
    :cartItemsQuantity="cartItemsQuantity"
    :handleNavbarIconsClick="handleNavbarIconsClick"
  />
  <MenuBox
    :showedBox="state.menuBox"
    :favorites="favorites"
    :cart="cart"
    :totalPrice="totalPrice"
    :deleteAllFavorites="deleteAllFavorites"
    :deleteAllCartItems="deleteAllCartItems"
    :deleteFavorite="deleteFavorite"
    :deleteCartItem="deleteCartItem"
    :addToCart="addToCart"
    :handleSubmit="handleMenuBoxSubmit"
  />
  <RouterView />
</template>
