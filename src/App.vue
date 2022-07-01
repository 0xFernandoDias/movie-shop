<script setup>
/* eslint-disable no-unused-vars */
import { onMounted } from 'vue'
import { useAppDataStore } from '../src/stores/appData'
import { useMoviesStore } from '../src/stores/movies'
import { useUserRegisterStore } from '../src/stores/userRegister'

import NavbarComponent from './components/NavbarComponent.vue'
import FavoritesBox from './components/FavoritesBox.vue'
import CartBox from './components/CartBox.vue'
import ModalComponent from './components/ModalComponent.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
const userRegisterStore = useUserRegisterStore()

onMounted(() => {
  moviesStore.fetchMovies()
})
</script>

<template>
  <div class="w-full flex flex-col box-border p-0 m-0">
    <div class="flex fixed w-full">
      <NavbarComponent />
    </div>
    <div
      v-if="appDataStore.isFavoritesVisible"
      class="flex flex-row-reverse w-full absolute top-16 right-0"
    >
      <FavoritesBox />
    </div>
    <div
      v-if="appDataStore.isCartVisible"
      class="flex flex-row-reverse w-full absolute top-16 right-0"
    >
      <CartBox />
    </div>
    <div
      v-if="appDataStore.getIsModalVisible"
      class="flex flex-row w-full absolute justify-center items-center top-[50%]"
    >
      <ModalComponent />
    </div>
    <RouterView />
  </div>
</template>
