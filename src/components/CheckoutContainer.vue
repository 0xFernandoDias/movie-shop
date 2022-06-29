<script setup>
defineProps({
  movies: {
    type: [
      {
        posterPath: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        price: {
          // voteAverage * 10
          type: Number,
          required: true,
        },
        quantity: {
          // 1
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  removeFromCart: {
    type: Function,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: false,
  },
  handleSubmit: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
