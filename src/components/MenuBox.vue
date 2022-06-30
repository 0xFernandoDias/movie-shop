<script setup>
import { computed } from 'vue'
import { useMoviesStore } from '../stores/movies'
import { useAppDataStore } from '../stores/appData'

import TotalPrice from './TotalPrice.vue'
import ItemsList from './ItemsList.vue'

const moviesStore = useMoviesStore()
const appDataStore = useAppDataStore()

const favorites = computed(() => {
  return moviesStore.getFavorites
})
const cart = computed(() => {
  return moviesStore.getCart
})

const deleteAllFavorites = () => moviesStore.deleteAllFavorites()
const deleteAllCartItems = () => moviesStore.deleteAllCartItems()

function handleMenuBoxSubmit() {
  // router.push({ name: 'checkout' })
  // validations
}
</script>

<template>
  <div>
    <button
      :onclick="
        appDataStore.menuBox === 'cart'
          ? () => deleteAllCartItems()
          : () => deleteAllFavorites()
      "
    >
      clear
    </button>
    <ItemsList
      :location="appDataStore.menuBox"
      :movies="appDataStore.menuBox === 'cart' ? cart : favorites"
    />
    <div v-show="appDataStore.menuBox === 'cart'">
      <TotalPrice />
      <button :onclick="() => handleMenuBoxSubmit()">submit</button>
    </div>
  </div>
</template>

<style scoped></style>
