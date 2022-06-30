<script setup>
import { computed } from 'vue'
import { useUserRegisterStore } from '../stores/userRegister'
import { useMoviesStore } from '../stores/movies'
import { useAppDataStore } from '../stores/appData'

const userRegisterStore = useUserRegisterStore()
const moviesStore = useMoviesStore()
const appDataStore = useAppDataStore()

const userName = computed(() => {
  return userRegisterStore.getUserName
})

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
    Hello {{ userName }}
    <button :onclick="() => handleModalSubmit()">ok</button>
  </div>
</template>

<style scoped></style>
