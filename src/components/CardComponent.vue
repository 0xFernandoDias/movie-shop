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
  <div
    class="w-64 flex flex-col outline outline-2 outline-gray-400 mb-16 justify-between"
  >
    <div
      class="flex flex-col justify-between h-96 border-b-2 border-b-gray-400"
      :style="{
        'background-image': `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
    >
      <div class="flex flex-row justify-end px-4 py-4">
        <FavoritesIcon
          as="button"
          :color="movie.isFavorite ? '#ef4444' : '#111827'"
          :onclick="
            !movie.isFavorite
              ? () => moviesStore.addToFavorites(movie.title)
              : () => moviesStore.deleteFavorite(movie.title)
          "
        />
      </div>
      <div class="flex flex-row justify-center py-4">
        <span>{{ movie.release_date }}</span>
      </div>
    </div>
    <div class="flex flex-col items-center px-4">
      <span class="py-4 text-center"
        ><b>{{ movie.title }}</b></span
      >
      <div class="flex flex-row justify-between w-24">
        <div class="flex flex-row items-center">
          <StarIcon /><span class="flex px-2"
            ><b>{{ Math.round(movie.vote_average) }}</b></span
          >
        </div>
        <span>{{ movie.media_type }}</span>
      </div>
      <span class="py-4"
        ><b>{{
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movie.price)
        }}</b></span
      >
    </div>
    <ButtonComponent
      :text="movie.isInCart ? 'Remove to cart' : 'Add to cart'"
      :color="movie.isInCart ? 'bg-red-500' : 'bg-indigo-600'"
      :onClick="
        movie.isInCart
          ? () => moviesStore.deleteCartItem(movie.title)
          : () => moviesStore.addToCart(movie.title)
      "
    />
  </div>
</template>
