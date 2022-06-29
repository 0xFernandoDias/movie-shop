<script setup>
defineProps({
  isInCart: {
    type: Boolean,
    required: true,
  },
  isInFavorites: {
    type: Boolean,
    required: true,
  },
  addToFavorites: {
    type: Function,
    required: true,
  },
  addToCart: {
    type: Function,
    required: true,
  },
  removeFromFavorites: {
    type: Function,
    required: true,
  },
  removeFromCart: {
    type: Function,
    required: true,
  },
  movie: {
    type: {
      posterPath: {
        type: String,
        required: true,
      },
      releaseDate: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      voteAverage: {
        type: Number,
        required: true,
      },
      // genrer
      price: {
        // voteAverage * 10
        type: Number,
        required: true,
      },
    },
  },
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
