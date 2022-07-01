<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import TotalPrice from './TotalPrice.vue'
import ButtonComponent from './ButtonComponent.vue'
import TrashIcon from '../assets/TrashIcon.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()

function handleCheckoutSubmit() {
  appDataStore.showModal = true
  // validations
}
</script>

<template>
  <div class="flex flex-col w-[50%] gap-8">
    <div class="flex flex-row w-full justify-between pr-32">
      <span>Image</span><span>Name</span><span>Qtd</span><span>Price</span>
    </div>
    <ul class="flex flex-col gap-4 w-full">
      <div
        v-for="movie in moviesStore.getCart"
        :key="movie.title"
        class="flex flex-row items-center w-full justify-between"
      >
        <img
          class="flex h-32"
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
      <div class="flex w-[100%] h-0.5 bg-gray-400" />
    </ul>
    <TotalPrice />
    <ButtonComponent
      :text="'Finalize'"
      :color="'bg-indigo-600'"
      :onclick="() => handleCheckoutSubmit()"
    />
  </div>
</template>
