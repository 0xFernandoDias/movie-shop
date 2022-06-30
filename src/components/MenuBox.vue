<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import ItemsList from './ItemsList.vue'
import TotalPrice from './TotalPrice.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()

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
            ? () => moviesStore.deleteAllCartItems()
            : () => moviesStore.deleteAllFavorites()
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
