<script setup>
import { computed } from 'vue'
import { useMoviesStore } from '../stores/movies'
import { useAppDataStore } from '../stores/appData'

import ItemsList from './ItemsList.vue'
import TotalPrice from './TotalPrice.vue'

const moviesStore = useMoviesStore()
const appDataStore = useAppDataStore()

const cart = computed(() => {
  return moviesStore.getCart
})

function handleCheckoutSubmit() {
  appDataStore.showModal = true
  // validations
}
</script>

<template>
  <div>
    <ItemsList :location="'checkout'" :movies="cart" />
    <TotalPrice />
    <button :onclick="() => handleCheckoutSubmit()">submit</button>
  </div>
</template>

<style scoped></style>
