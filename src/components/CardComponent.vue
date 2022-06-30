<script setup>
import ButtonComponent from './ButtonComponent.vue'
import { useMoviesStore } from '../stores/movies'

const store = useMoviesStore()

defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <button
      :onclick="
        !movie.isFavorite
          ? () => store.addToFavorites(movie.title)
          : () => store.deleteFavorite(movie.title)
      "
    >
      {{ movie.isFavorite ? 'Delete Favorite' : 'Add To Favorites' }}
    </button>
    {{ movie.title }}
    {{ movie.release_date }}
    {{ movie.vote_average }}
    {{ movie.media_type }}
    {{ movie.price }}
    {{ movie.poster_path }}
    <ButtonComponent
      :text="movie.isInCart ? 'Remove to cart' : 'Add to cart'"
      :color="movie.isInCart ? 'red-500' : 'indigo-600'"
      :onClick="
        movie.isInCart
          ? () => store.deleteCartItem(movie.title)
          : () => store.addToCart(movie.title)
      "
    />
  </div>
</template>

<style scoped></style>
