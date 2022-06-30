<script setup>
import { computed } from 'vue'
import { useMoviesStore } from '../stores/movies'

const store = useMoviesStore()

defineProps({
  location: {
    type: String,
    required: false,
  },
})

const totalPrice = computed(() => {
  return store.getTotalPrice
})
</script>

<template>
  <div>Total: {{ totalPrice }}</div>
</template>

<style scoped></style>
