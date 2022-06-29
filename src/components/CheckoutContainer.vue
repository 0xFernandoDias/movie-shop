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
  deleteCartItem: {
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
