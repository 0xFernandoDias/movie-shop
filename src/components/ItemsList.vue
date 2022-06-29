<script setup>
defineProps({
  location: {
    type: 'favorites' || 'cart' || 'checkout',
    required: true,
  },
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
  addToCart: {
    type: Function,
    required: true,
  },
  deleteFavorite: {
    type: Function,
    required: true,
  },
  deleteCartItem: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
