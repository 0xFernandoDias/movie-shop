<script setup>
import { useMoviesStore } from '../stores/movies'

const moviesStore = useMoviesStore()
</script>

<template>
  <div class="row">
    <span>Total: </span> <span>{{ moviesStore.getTotalPrice }}</span>
  </div>
</template>
