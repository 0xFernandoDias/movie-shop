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
  <nav
    class="w-full flex flex-row px-8 py-0 bg-teal-200 justify-between items-center"
  >
    <LogoIcon />
    <form
      class="flex flex-row bg-gray-50 h-10 items-center px-2 rounded border-2 border-gray-400"
    >
      <input
        type="text"
        v-model="moviesStore.searchInput"
        placeholder="Search"
        style="outline: 0"
        class="w-56 mx-2 bg-gray-50"
      />
      <SearchIcon />
    </form>
    <div class="w-24 flex flex-row justify-between items-center mb-4">
      <button
        class="flex flex-col"
        as="div"
        :onclick="() => handleNavbarIconsClick('favorites')"
      >
        <div class="flex flex-row justify-end w-full relative top-3">
          <div
            class="flex bg-yellow-200 rounded-full w-6 justify-center align-center"
          >
            <b>{{ moviesStore.getFavoritesQuantity }}</b>
          </div>
        </div>
        <FavoritesIcon :location="'navbar'" :active="false" />
      </button>

      <button
        class="flex flex-col"
        as="div"
        :onclick="() => handleNavbarIconsClick('cart')"
      >
        <div class="flex flex-row justify-end w-full relative top-3">
          <div
            class="flex bg-yellow-200 rounded-full w-6 justify-center align-center"
          >
            <b>{{ moviesStore.getCartItemsQuantity }}</b>
          </div>
        </div>
        <CartIcon :location="'navbar'" />
      </button>
    </div>
  </nav>
</template>
