<script setup>
import ButtonComponent from './ButtonComponent.vue'
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
  deleteFavorite: {
    type: Function,
    required: true,
  },
  deleteCartItem: {
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
      mediaType: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  },
})
</script>

<template>
  <div>
    <button onclick="!isInFavorites ? addToFavorites : deleteFavorite">
      {{ !isInFavorites ? 'Add To Favorites' : 'Delete Favorite' }}
    </button>
    {{ movie.title }}
    {{ movie.release_date }}
    {{ movie.vote_average }}
    {{ movie.media_type }}
    {{ movie.price }}
    {{ movie.poster_path }}
    <ButtonComponent
      :text="isInCart ? 'Add' : 'Remove'"
      :color="isInCart ? 'red-500' : 'indigo-600'"
      :onClick="isInCart ? deleteCartItem : addToCart"
    />
  </div>
</template>

<style scoped></style>
