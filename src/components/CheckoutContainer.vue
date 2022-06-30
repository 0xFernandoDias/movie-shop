<script setup>
import ItemsList from './ItemsList.vue'
import TotalPrice from './TotalPrice.vue'

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
  <div>
    <ItemsList
      :location="'checkout'"
      :movies="movies"
      :deleteCartItem="deleteCartItem"
    />
    <TotalPrice :totalPrice="totalPrice" />
    <button onclick="handleSubmit">submit</button>
  </div>
</template>

<style scoped></style>
