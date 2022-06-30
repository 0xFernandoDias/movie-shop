<script setup>
import { useMoviesStore } from '../stores/movies'
import { useAppDataStore } from '../stores/appData'

import ItemsList from './ItemsList.vue'
import TotalPrice from './TotalPrice.vue'

const moviesStore = useMoviesStore()
const appDataStore = useAppDataStore()

function handleCheckoutSubmit() {
  appDataStore.showModal = true
  // validations
}
</script>

<template>
  <div>
    <ItemsList :location="'checkout'" :movies="moviesStore.getCart" />
    <TotalPrice />
    <button :onclick="() => handleCheckoutSubmit()">submit</button>
  </div>
</template>

<style scoped></style>
