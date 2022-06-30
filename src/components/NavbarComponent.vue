<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import LogoIcon from '../assets/LogoIcon.vue'
import SearchIcon from '../assets/SearchIcon.vue'
import FavoritesIcon from '../assets/FavoritesIcon.vue'
import CartIcon from '../assets/CartIcon.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()

function handleNavbarIconsClick(icon) {
  if (icon === 'favorites') {
    appDataStore.menuBox = 'favorites'
  } else if (icon === 'cart') {
    appDataStore.menuBox = 'cart'
  } else {
    appDataStore.menuBox = 'none'
  }
}
</script>

<template>
  <nav class="row">
    <LogoIcon />
    <form class="space between">
      <input
        type="search"
        v-model="moviesStore.searchInput"
        placeholder="Search"
      />
      <SearchIcon />
    </form>

    <div class="row">
      <div
        class="column"
        as="button"
        :onclick="() => handleNavbarIconsClick('favorites')"
      >
        <div class="quantity">{{ moviesStore.getFavoritesQuantity }}</div>
        <FavoritesIcon :location="'navbar'" :active="false" />
      </div>

      <div
        class="column"
        as="button"
        :onclick="() => handleNavbarIconsClick('cart')"
      >
        <div class="quantity">{{ moviesStore.getCartItemsQuantity }}</div>
        <CartIcon :location="'navbar'" />
      </div>
    </div>
  </nav>
</template>
