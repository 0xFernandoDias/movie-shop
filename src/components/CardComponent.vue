<script setup>
import { useMoviesStore } from '../stores/movies'
import ButtonComponent from './ButtonComponent.vue'
import FavoritesIcon from '../assets/FavoritesIcon.vue'
import StarIcon from '../assets/StarIcon.vue'

const moviesStore = useMoviesStore()

defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="column">
    <div class="bg-image" :src="movie.poster_path">
      <FavoritesIcon
        as="button"
        :location="'cart'"
        :active="movie.isFavorite ? true : false"
        :onclick="
          !movie.isFavorite
            ? () => moviesStore.addToFavorites(movie.title)
            : () => moviesStore.deleteFavorite(movie.title)
        "
      />
      <span>{{ movie.release_date }}</span>
    </div>
    <div class="main-info-content column">
      <span>{{ movie.title }}</span>
      <div class="row">
        <div class="row">
          <StarIcon /><span>{{ movie.vote_average }}</span>
        </div>
        <span>{{ movie.media_type }}</span>
      </div>
      <span>{{ movie.price }}</span>
    </div>
    <ButtonComponent
      :text="movie.isInCart ? 'Remove to cart' : 'Add to cart'"
      :color="movie.isInCart ? 'red-500' : 'indigo-600'"
      :onClick="
        movie.isInCart
          ? () => moviesStore.deleteCartItem(movie.title)
          : () => moviesStore.addToCart(movie.title)
      "
    />
  </div>
</template>
