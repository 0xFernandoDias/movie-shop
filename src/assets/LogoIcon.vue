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
        moviesStore.clearSearchInput(), $router.push({ path: '/' })
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
