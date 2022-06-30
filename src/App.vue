<script setup>
/* eslint-disable no-unused-vars */
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAppDataStore } from '../src/stores/appData'
import { useMoviesStore } from '../src/stores/movies'
import { useUserRegisterStore } from '../src/stores/userRegister'

import NavbarComponent from './components/NavbarComponent.vue'
import MenuBox from './components/MenuBox.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
const userRegisterStore = useUserRegisterStore

onMounted(() => {
  moviesStore.fetchMovies()
})
</script>

<template>
  <div
    class="column"
    :onclick="
      () => {
        appDataStore.menuBox = 'none'
      }
    "
  >
    <NavbarComponent />
    <MenuBox
      v-show="
        appDataStore.menuBox === 'favorites' || appDataStore.menuBox === 'cart'
      "
    />
    <RouterView />
  </div>
</template>
