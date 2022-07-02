<script setup>
import { useAppDataStore } from '../stores/appData'
import { useMoviesStore } from '../stores/movies'
import LogoIcon from '../assets/LogoIcon.vue'
import SearchIcon from '../assets/SearchIcon.vue'
import FavoritesIcon from '../assets/FavoritesIcon.vue'
import CartIcon from '../assets/CartIcon.vue'

const appDataStore = useAppDataStore()
const moviesStore = useMoviesStore()
</script>

<template>
  <nav
    class="w-full h-16 flex flex-row px-8 py-1 bg-teal-200 justify-between items-center shadow"
  >
    <LogoIcon />
    <form
      class="flex flex-row bg-gray-50 h-10 items-center px-2 rounded border-2 border-gray-400 mx-4"
    >
      <input
        type="text"
        v-model="moviesStore.searchInput"
        placeholder="Search"
        style="outline: 0"
        class="md:w-80 w-24 bg-gray-50 text-lg"
      />
      <SearchIcon />
    </form>
    <div class="w-24 flex flex-row justify-between items-center">
      <button
        class="flex flex-col"
        as="div"
        :onclick="
          () =>
            appDataStore.getIsFavoritesVisible
              ? appDataStore.hideFavorites()
              : appDataStore.showFavorites()
        "
      >
        <div class="flex flex-row justify-end w-full -translate-y-3 z-50">
          <div
            class="flex bg-yellow-200 rounded-full w-6 justify-center align-center absolute text-base"
            v-if="moviesStore.getFavoritesQuantity > 0"
          >
            <b>{{ moviesStore.getFavoritesQuantity }}</b>
          </div>
        </div>
        <FavoritesIcon :color="'#f9fafb'" />
      </button>

      <button
        class="flex flex-col"
        as="div"
        :onclick="
          () =>
            appDataStore.getIsCartVisible
              ? appDataStore.hideCart()
              : appDataStore.showCart()
        "
      >
        <div class="flex flex-row justify-end w-full -translate-y-3 z-50">
          <div
            class="flex bg-yellow-200 rounded-full w-6 justify-center align-center absolute text-base"
            v-if="moviesStore.getCartItemsQuantity > 0"
          >
            <b>{{ moviesStore.getCartItemsQuantity }}</b>
          </div>
        </div>
        <CartIcon :location="'navbar'" />
      </button>
    </div>
  </nav>
</template>
