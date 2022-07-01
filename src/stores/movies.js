import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [],
    searchInput: '',
  }),
  getters: {
    getMovies: (state) => state.movies,
    getFilteredMovies(state) {
      if (state.getFilteredMovies !== '') {
        return state.movies.filter((movie) =>
          movie.title.toLowerCase().includes(state.searchInput.toLowerCase())
        )
      } else {
        return state.movies
      }
    },
    getCart: (state) => {
      let cart = state.movies.filter((movie) => {
        if (movie.isInCart) {
          return movie
        }
      })
      return cart
    },
    getFavorites: (state) => {
      let favorites = state.movies.filter((movie) => {
        if (movie.isFavorite) {
          return movie
        }
      })
      return favorites
    },
    getCartItemsQuantity: (state) => {
      let cart = state.movies.filter((movie) => {
        if (movie.isInCart) {
          return movie
        }
      })
      return cart.length
    },
    getFavoritesQuantity: (state) => {
      let favorites = state.movies.filter((movie) => {
        if (movie.isFavorite) {
          return movie
        }
      })
      return favorites.length
    },
    getTotalPrice: (state) => {
      let cart = state.movies.filter((movie) => {
        if (movie.isInCart) {
          return movie
        }
      })
      return cart.reduce((acc, movie) => {
        return acc + movie.price
      }, 0)
    },
  },
  actions: {
    addToCart(movieTitle) {
      this.movies.forEach((movie) => {
        if (movie.title === movieTitle) {
          movie.isInCart = true
        }
        return
      })
    },
    addToFavorites(movieTitle) {
      this.movies.forEach((movie) => {
        if (movie.title === movieTitle) {
          movie.isFavorite = true
        }
        return
      })
    },
    deleteAllCartItems() {
      this.movies.forEach((movie) => {
        movie.isInCart = false
      })
    },
    deleteAllFavorites() {
      this.movies.forEach((movie) => {
        movie.isFavorite = false
      })
    },
    deleteCartItem(movieTitle) {
      this.movies.forEach((movie) => {
        if (movie.title === movieTitle) {
          movie.isInCart = false
        }
        return
      })
    },
    deleteFavorite(movieTitle) {
      this.movies.forEach((movie) => {
        if (movie.title === movieTitle) {
          movie.isFavorite = false
        }
        return
      })
    },
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
          price: Math.round(obj.vote_average) * 10,
        }))

        this.movies = moviesWithAdditionalProps
      } catch (e) {
        alert(e)
      }
    },
  },
})
