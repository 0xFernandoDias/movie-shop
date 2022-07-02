<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import { useUserRegisterStore } from '../stores/userRegister'
import ButtonComponent from './ButtonComponent.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
const userRegisterStore = useUserRegisterStore()
</script>

<template>
  <div
    class="flex flex-col w-[45vh] md:w-[70vh] max-h-[40vh] fixed h-full border-2 border-gray-400 bg-gray-50 justify-between items-center p-8 z-50 shadow-2xl"
  >
    <h1 class="text-xl">
      <b>Thank you {{ userRegisterStore.getUserName }}!</b>
    </h1>
    <span class="text-lg text-center"
      >Your purchase has been successfully completed!</span
    >
    <ButtonComponent
      :text="'Go back to the store'"
      :color="'bg-indigo-600'"
      :onClick="
        () => {
          userRegisterStore.resetUserRegister(),
            $router.push({ path: '/' }),
            appDataStore.hideModal(),
            moviesStore.deleteAllCartItems(),
            moviesStore.deleteAllFavorites()
        }
      "
    />
  </div>
</template>
