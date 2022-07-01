<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import { useUserRegisterStore } from '../stores/userRegister'
import ButtonComponent from './ButtonComponent.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
const userRegisterStore = useUserRegisterStore()

function handleModalSubmit() {
  moviesStore.deleteAllCartItems()
  moviesStore.deleteAllFavorites()
  userRegisterStore.resetUserRegister()
  appDataStore.showModal = false
  // router.push({ name: '/' })
}
</script>

<template>
  <div>
    <h1>Hello {{ userRegisterStore.getUserName }}</h1>
    <span>Your purchase has been successfully completed</span>
    <ButtonComponent :onclick="() => handleModalSubmit()"
      >Go back to the store</ButtonComponent
    >
  </div>
</template>
