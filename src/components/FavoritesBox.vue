<script setup>
import { useMoviesStore } from '../stores/movies'
import CartIcon from '../assets/CartIcon.vue'
import TrashIcon from '../assets/TrashIcon.vue'

const moviesStore = useMoviesStore()
</script>

<template>
  <div
    class="flex flex-col w-[45vh] md:w-[380px] max-h-[80vh] fixed h-full bg-gray-50 outline outline-2 outline-gray-400 p-4 justify-between shadow-2xl z-50"
    id="pot"
  >
    <div class="flex flex-col">
      <div class="flex flex-row justify-between pb-4">
        <h2 class="text-lg"><b>My Favorites</b></h2>
        <a
          as="button"
          v-if="moviesStore.getFavoritesQuantity > 0"
          class="text-lg underline underline-offset-1 cursor-pointer text-indigo-600"
          :onclick="() => moviesStore.deleteAllFavorites()"
        >
          Clear
        </a>
      </div>
      <div class="flex overflow-y-auto overflow-x-hidden max-h-[60vh]">
        <ul class="flex flex-col gap-4">
          <div
            v-for="movie in moviesStore.getFavorites"
            :key="movie.id"
            class="flex flex-row justify-between items-center w-full"
          >
            <img
              class="flex h-24"
              :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            />
            <span class="w-36 mx-2 text-sm"
              ><b>{{ movie.title }}</b></span
            >
            <span span class="mx-2 text-xl">{{
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(movie.price)
            }}</span>
            <CartIcon
              as="button"
              v-if="!movie.isInCart"
              location="menuBox"
              class="mx-2 cursor-pointer"
              :onclick="() => moviesStore.addToCart(movie.title)"
            />
            <TrashIcon
              as="button"
              class="cursor-pointer"
              :onclick="() => moviesStore.deleteFavorite(movie.title)"
            />
          </div>
        </ul>
      </div>
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
