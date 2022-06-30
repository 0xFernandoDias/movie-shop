<script setup>
defineProps({
  location: {
    type: String,
    required: false,
  },
  totalPrice: {
    type: Number,
    required: false,
  },
})
</script>

<template>
  <div>Total: {{ totalPrice }}</div>
</template>

<style scoped></style>
