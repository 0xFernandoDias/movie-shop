<script setup>
import { useMoviesStore } from '../stores/movies'
import TrashIcon from '../assets/TrashIcon.vue'
import TotalPrice from './TotalPrice.vue'
import ButtonComponent from './ButtonComponent.vue'

const moviesStore = useMoviesStore()
</script>

<template>
  <div
    class="flex flex-col w-[330px] max-h-[80vh] fixed h-full bg-gray-50 outline outline-2 outline-gray-400 p-4 justify-between"
  >
    <div class="flex flex-col">
      <div class="flex flex-row justify-between pb-4">
        <h1>My Cart</h1>
        <a
          as="button"
          v-if="moviesStore.getCartItemsQuantity > 0"
          class="underline underline-offset-1 cursor-pointer text-indigo-600"
          :onclick="() => moviesStore.deleteAllCartItems()"
        >
          Clear
        </a>
      </div>
      <div class="flex overflow-y-auto max-h-[60vh]">
        <ul class="flex flex-col gap-4">
          <div
            v-for="movie in moviesStore.getCart"
            :key="movie.title"
            class="flex flex-row items-center"
          >
            <img
              class="flex h-24"
              :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            />
            <span class="w-36 mx-2">{{ movie.title }}</span>
            <span class="mx-2">1</span>
            <span span class="mx-2">{{
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
        :onClick="() => $router.push({ path: '/checkout' })"
      />
    </div>
  </div>
</template>
