<script setup>
import { useMoviesStore } from '../stores/movies'

const moviesStore = useMoviesStore()
</script>

<template>
  <div
    as="button"
    class="cursor-pointer"
    :onclick="
      () => {
        if ($route.path === '/checkout') {
          $router.push('/'), moviesStore.clearSearchInput()
        } else {
          $router.go('/')
        }
      }
    "
  >
    <font-awesome-icon
      icon="fa-solid fa-couch"
      :class="'fa-2xl hover:opacity-80 active:opacity-60'"
      style="color: #f9fafb"
    />
  </div>
</template>
