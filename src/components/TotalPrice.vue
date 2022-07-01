<script setup>
import { useMoviesStore } from '../stores/movies'

const moviesStore = useMoviesStore()
</script>

<template>
  <div class="flex flex-row justify-between">
    <span>Total: </span>
    <span
      ><b>{{
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(moviesStore.getTotalPrice)
      }}</b></span
    >
  </div>
</template>
