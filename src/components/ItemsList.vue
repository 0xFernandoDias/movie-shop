<script setup>
import { useMoviesStore } from '../stores/movies'

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
    <li :for="movie in movies">
      <image
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
      />
      {{ movie.title }}
      {{ movie.price }}
      <button :onclick="() => addToCart(movie.title)">add to cart</button>
      <button :onclick="() => deleteFavorite(movie.title)">
        delete favorite
      </button>
    </li>
  </ul>
  <ul v-else-if="location === 'cart'">
    <li :for="movie in movies">
      <image
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
      />
      {{ movie.title }}
      1
      {{ movie.price }}
      <button :onclick="() => deleteCartItem(movie.title)">
        delete cart item
      </button>
    </li>
  </ul>
  <ul v-else-if="location === 'checkout'">
    <li :for="movie in movies">
      <image
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
      />
      {{ movie.title }}
      1
      {{ movie.price }}
      <button :onclick="() => deleteCartItem(movie.title)">
        delete cart item
      </button>
      <hr />
    </li>
  </ul>
</template>

<style scoped></style>
