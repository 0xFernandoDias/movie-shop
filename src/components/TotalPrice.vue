<script setup>
import { useMoviesStore } from '../stores/movies'

const store = useMoviesStore()
</script>

<template>
  <div class="row">
    <span>Total: </span> <span>{{ store.getTotalPrice }}</span>
  </div>
</template>
