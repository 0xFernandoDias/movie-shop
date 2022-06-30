<script setup>
import TotalPrice from './TotalPrice.vue'
defineProps({
  showedBox: {
    type: 'none' || 'favorites' || 'cart',
    required: true,
  },
  favorites: {
    type: Array,
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
  deleteCartItem: {
    type: Function,
    required: true,
  },
  deleteFavorite: {
    type: Function,
    required: true,
  },
  addToCart: {
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
  <div>
    <button
      onclick="showedBox === 'cart' ? deleteAllCartItems : deleteAllFavorites"
    >
      clear
    </button>
    <ItemsList
      :location="showedBox"
      :movies="showedBox === 'cart' ? cart : favorites"
      :addToCart="addToCart"
      :deleteFavorite="deleteFavorite"
      :deleteCartItem="deleteCartItem"
    />
    <div v-if="showedBox === 'cart'">
      <TotalPrice :totalPrice="totalPrice" />
      <button onclick="handleSubmit">submit</button>
    </div>
  </div>
</template>

<style scoped></style>
