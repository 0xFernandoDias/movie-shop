export const isInCart = (movie) => {
  if (movie.isInCart) {
    return true
  }
  return false
}

export const isInFavorites = (movie) => {
  if (movie.isFavorite) {
    return true
  }
  return false
}
