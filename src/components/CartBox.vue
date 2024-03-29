<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import TrashIcon from '../assets/TrashIcon.vue'
import TotalPrice from './TotalPrice.vue'
import ButtonComponent from './ButtonComponent.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
</script>

<template>
  <div
    class="flex flex-col w-[45vh] md:w-[380px] h-[80vh] fixed bg-gray-50 outline outline-2 outline-gray-400 p-4 justify-between shadow-2xl z-50"
    id="pot"
  >
    <div class="flex flex-col">
      <div class="flex flex-row justify-between pb-4">
        <h1 class="text-lg"><b>My Cart</b></h1>
        <a
          as="button"
          v-if="moviesStore.getCartItemsQuantity > 0"
          class="text-lg underline underline-offset-1 cursor-pointer text-indigo-600"
          :onclick="() => moviesStore.deleteAllCartItems()"
        >
          Clear
        </a>
      </div>
      <div class="flex overflow-y-auto overflow-x-hidden max-h-[60vh]">
        <ul class="flex flex-col gap-4">
          <div
            v-for="movie in moviesStore.getCart"
            :key="movie.id"
            class="flex flex-row justify-between items-center w-full"
          >
            <img
              class="flex h-24"
              :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            />
            <span class="w-36 mx-2"
              ><b>{{ movie.title }}</b></span
            >
            <span class="mx-2">1</span>
            <span span class="mx-2 text-xl">{{
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(movie.price)
            }}</span>
            <TrashIcon
              as="button"
              class="cursor-pointer"
              :onclick="() => moviesStore.deleteCartItem(movie.title)"
            />
          </div>
        </ul>
      </div>
    </div>
    <div
      class="flex flex-col gap-2"
      v-if="moviesStore.getCartItemsQuantity > 0"
    >
      <TotalPrice />
      <ButtonComponent
        :text="'Checkout'"
        :color="'bg-indigo-600'"
        :onClick="
          () => {
            $router.push({ path: '/checkout' }),
              appDataStore.hideFavorites(),
              appDataStore.hideCart()
          }
        "
      />
    </div>
  </div>
</template>

<style scoped>
#pot {
  -webkit-animation: linear;
  -webkit-animation-name: run;
  -webkit-animation-duration: 0.09s;
}
@-webkit-keyframes run {
  0% {
    right: calc(-100px);
  }
  100% {
    right: calc(0px);
  }
}
</style>
