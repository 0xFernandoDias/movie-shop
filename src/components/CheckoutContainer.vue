<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
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
  <div class="flex flex-col">
    <div class="flex flex-row">
      <span>Image</span><span>Name</span><span>Qtd</span><span>Price</span>
    </div>
    <ul>
      <div
        v-for="movie in moviesStore.getCart"
        :key="movie.title"
        class="flex flex-col"
      >
        <div class="flex flex-row">
          <div
            class="flex h-24"
            :style="{
              'background-image': `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
              'background-repeat': 'no-repeat',
              'background-size': 'cover',
            }"
          ></div>
          <span>{{ movie.title }}</span>
          1
          <span>{{ movie.price }}</span>
          <TrashIcon
            as="button"
            :onclick="() => moviesStore.deleteCartItem(movie.title)"
          />
        </div>
        <hr />
      </div>
    </ul>
    <TotalPrice />
    <ButtonComponent :onclick="() => handleCheckoutSubmit()"
      >Finalize</ButtonComponent
    >
  </div>
</template>
