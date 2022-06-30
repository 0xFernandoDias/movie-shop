<script setup>
defineProps({
  location: {
    type: 'favorites' || 'cart' || 'checkout',
    required: true,
  },
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
      },
    ],
    required: true,
  },
  addToCart: {
    type: Function,
    required: false,
  },
  deleteFavorite: {
    type: Function,
    required: false,
  },
  deleteCartItem: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <ul v-if="location === 'favorites'">
    <li :for="movie in movies">
      <image :src="`https://image.tmdb.org/t/p/original/${movie.posterPath}`" />
      {{ movie.title }}
      {{ movie.price }}
      <button onclick="addToCart(movie.movieTitle)">add to cart</button>
      <button onclick="deleteFavorite(movie.movieTitle)">
        delete favorite
      </button>
    </li>
  </ul>
  <ul v-else-if="location === 'cart'">
    <li :for="movie in movies">
      <image :src="`https://image.tmdb.org/t/p/original/${movie.posterPath}`" />
      {{ movie.title }}
      1
      {{ movie.price }}
      <button onclick="deleteCartItem(movie.movieTitle)">
        delete cart item
      </button>
    </li>
  </ul>
  <ul v-else-if="location === 'checkout'">
    <li :for="movie in movies">
      <image :src="`https://image.tmdb.org/t/p/original/${movie.posterPath}`" />
      {{ movie.title }}
      1
      {{ movie.price }}
      <button onclick="deleteCartItem(movie.movieTitle)">
        delete cart item
      </button>
      <hr />
    </li>
  </ul>
</template>

<style scoped></style>
