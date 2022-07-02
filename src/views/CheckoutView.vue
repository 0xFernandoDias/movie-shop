<script setup>
import { useMoviesStore } from '../stores/movies'
import { useAppDataStore } from '../stores/appData'
import FormsContainer from '../components/FormsContainer.vue'
import CheckoutContainer from '../components/CheckoutContainer.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
</script>

<template>
  <main
    class="w-full flex flex-col flex-wrap px-16 py-24 gap-12 justify-center"
    :onclick="() => appDataStore.hideMenus()"
    v-if="moviesStore.getCartItemsQuantity > 0"
  >
    <h1 class="text-xl"><b>Checkout</b></h1>
    <div class="flex flex-row justify-between">
      <FormsContainer />
      <CheckoutContainer />
    </div>
  </main>
  <main
    class="w-full h-full flex flex-col flex-wrap px-16 py-24 gap-12 justify-center items-center"
    v-else
  >
    Your cart is empty
  </main>
</template>
