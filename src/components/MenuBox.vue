<script setup>
defineProps({
  showedBox: {
    type: 'none' || 'favorites' || 'cart',
    required: true,
  },
  favorites: {
    type: [
      {
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
        mediaType: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: false,
  },
  cart: {
    type: [
      {
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
        mediaType: {
          type: String,
          required: true,
        },
        price: {
          // voteAverage * 10
          type: Number,
          required: true,
        },
      },
    ],
    required: false,
  },
  totalPrice: {
    type: Number,
    required: false,
  },
  deleteAllFavorites: {
    type: Function,
    required: true,
  },
  deleteAllCartItems: {
    type: Function,
    required: true,
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
