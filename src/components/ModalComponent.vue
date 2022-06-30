<script setup>
import { useUserRegisterStore } from '../stores/userRegister'
import { useMoviesStore } from '../stores/movies'
import { useAppDataStore } from '../stores/appData'
import ButtonComponent from './ButtonComponent.vue'

const userRegisterStore = useUserRegisterStore()
const moviesStore = useMoviesStore()
const appDataStore = useAppDataStore()

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

<style scoped></style>
