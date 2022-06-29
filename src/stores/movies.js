import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [],
  }),
  getters: {
    getMovies: (state) => state.movies,
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
      cart.reduce((acc, movie) => {
        return acc + movie.price
      }, 0)
    },
  },
  actions: {
    addToCart: (movieTitle) => {
      this.movies.filter((movie) => {
        if (movie.title === movieTitle) {
          movie.isInCart = true
        }
      })
    },
    addToFavorites: (movieTitle) => {
      this.movies.filter((movie) => {
        if (movie.title === movieTitle) {
          movie.isFavorite = true
        }
      })
    },
    deleteAllCartItems: () => {
      this.movies.map((movie) => {
        movie.isInCart = false
      })
    },
    deleteAllFavorites: () => {
      this.movies.map((movie) => {
        movie.isFavorite = false
      })
    },
    deleteCartItem: (movieTitle) => {
      this.movies.filter((movie) => {
        if (movie.title === movieTitle) {
          movie.isInCart = false
        }
      })
    },
    deleteFavorite: (movieTitle) => {
      this.movies.filter((movie) => {
        if (movie.title === movieTitle) {
          movie.isFavorite = false
        }
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
