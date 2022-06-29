import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [],
  }),
  getters: {
    getMovies: (state) => state.movies,
    getCart: () => {},
    getFavorites: () => {},
    isInCart: () => {},
    isInFavorites: () => {},
    getCartItemsQuantity: () => {},
    getFavoritesQuantity: () => {},
    getTotalPrice: () => {},
  },
  actions: {
    addToCart: () => {},
    addToFavorites: () => {},
    deleteAllCartItems: () => {},
    deleteAllFavorites: () => {},
    deleteCartItem: () => {},
    deleteFavorite: () => {},
    async fetchMovies() {
      try {
        const {
          data: { results },
        } = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=fcfb42d19d2736ff4b22eece67b604ac&language=en-US'
        )

        const moviesWithAdditionalProps = results.map((obj) => ({
          ...obj,
          isFavorite: false,
          isInTheCart: false,
        }))

        this.movies = moviesWithAdditionalProps
      } catch (e) {
        alert(e)
      }
    },
  },
})
