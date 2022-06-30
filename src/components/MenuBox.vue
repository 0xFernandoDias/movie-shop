<script setup>
import { useMoviesStore } from '../stores/movies'
import { useAppDataStore } from '../stores/appData'

import TotalPrice from './TotalPrice.vue'
import ItemsList from './ItemsList.vue'

const moviesStore = useMoviesStore()
const appDataStore = useAppDataStore()

const deleteAllFavorites = () => moviesStore.deleteAllFavorites()
const deleteAllCartItems = () => moviesStore.deleteAllCartItems()

function handleMenuBoxSubmit() {
  // router.push({ name: 'checkout' })
  // validations
}
</script>

<template>
  <div class="column">
    <div class="row">
      <span>My {{ appDataStore.menuBox }}</span>
      <a
        as="button"
        :onclick="
          appDataStore.menuBox === 'cart'
            ? () => deleteAllCartItems()
            : () => deleteAllFavorites()
        "
      >
        Clear
      </a>
    </div>
    <ItemsList
      :location="appDataStore.menuBox"
      :movies="
        appDataStore.menuBox === 'cart'
          ? moviesStore.getCart
          : moviesStore.getFavorites
      "
    />
    <div v-show="appDataStore.menuBox === 'cart'" class="column">
      <TotalPrice />
      <button :onclick="() => handleMenuBoxSubmit()">Checkout</button>
    </div>
  </div>
</template>
