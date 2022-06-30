<script setup>
import { useMoviesStore } from '../stores/movies'
import CartIcon from '../assets/CartIcon.vue'
import TrashIcon from '../assets/TrashIcon.vue'

const store = useMoviesStore()

defineProps({
  location: {
    type: String,
    required: true,
  },
  movies: {
    type: Array,
    required: true,
  },
})

const deleteFavorite = (movieTitle) => store.deleteFavorite(movieTitle)
const deleteCartItem = (movieTitle) => store.deleteCartItem(movieTitle)
const addToCart = (movieTitle) => store.addToCart(movieTitle)
</script>

<template>
  <ul v-if="location === 'favorites'">
    <div :for="movie in movies" class="row">
      <image
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
      />
      <span>{{ movie.title }}</span>
      <span>{{ movie.price }}</span>
      <CartIcon
        as="button"
        location="menuBox"
        :onclick="() => addToCart(movie.title)"
      />
      <TrashIcon as="button" :onclick="() => deleteFavorite(movie.title)" />
    </div>
  </ul>

  <ul v-else-if="location === 'cart'">
    <div :for="movie in movies" class="row">
      <image
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
      />
      <span>{{ movie.title }}</span>
      1
      <span>{{ movie.price }}</span>
      <TrashIcon as="button" :onclick="() => deleteCartItem(movie.title)" />
    </div>
  </ul>

  <ul v-else-if="location === 'checkout'">
    <div :for="movie in movies" class="column">
      <div class="row">
        <image
          :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
        />
        <span>{{ movie.title }}</span>
        1
        <span>{{ movie.price }}</span>
        <TrashIcon as="button" :onclick="() => deleteCartItem(movie.title)" />
      </div>
      <hr />
    </div>
  </ul>
</template>
