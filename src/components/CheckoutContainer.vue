<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import ItemsList from './ItemsList.vue'
import TotalPrice from './TotalPrice.vue'
import ButtonComponent from './ButtonComponent.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()

function handleCheckoutSubmit() {
  appDataStore.showModal = true
  // validations
}
</script>

<template>
  <div class="column">
    <div class="row">
      <span>Image</span><span>Name</span><span>Qtd</span><span>Price</span>
    </div>
    <ItemsList :location="'checkout'" :movies="moviesStore.getCart" />
    <TotalPrice />
    <ButtonComponent :onclick="() => handleCheckoutSubmit()"
      >Finalize</ButtonComponent
    >
  </div>
</template>

<style scoped></style>
