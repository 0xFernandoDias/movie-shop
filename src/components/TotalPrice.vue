<script setup>
import { useMoviesStore } from '../stores/movies'

const store = useMoviesStore()

defineProps({
  location: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>Total: {{ store.getTotalPrice }}</div>
</template>

<style scoped></style>
