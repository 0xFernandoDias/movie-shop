<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import { useUserRegisterStore } from '../stores/userRegister'
import TotalPrice from './TotalPrice.vue'
import ButtonComponent from './ButtonComponent.vue'
import TrashIcon from '../assets/TrashIcon.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
const userRegisterStore = useUserRegisterStore()
</script>

<template>
  <div class="flex flex-col w-full md:w-[50%] gap-8">
    <div class="flex flex-row w-full justify-between md:pr-[10%]">
      <span>Image</span><span>Name</span><span>Qtd</span><span>Price</span>
    </div>
    <ul class="flex flex-col gap-4 w-full">
      <div
        class="flex flex-col gap-4"
        v-for="movie in moviesStore.getCart"
        :key="movie.id"
      >
        <div class="flex flex-row items-center w-full justify-between">
          <img
            class="flex h-32"
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
        <div class="flex w-full h-0.5 bg-gray-400" />
      </div>
    </ul>
    <TotalPrice />
    <ButtonComponent
      :text="'Buy'"
      :color="
        userRegisterStore.isUserRegisterFilled
          ? 'bg-indigo-600'
          : 'bg-indigo-200'
      "
      :onClick="
        () => {
          userRegisterStore.isUserRegisterFilled && appDataStore.showModal()
        }
      "
    />
  </div>
</template>
