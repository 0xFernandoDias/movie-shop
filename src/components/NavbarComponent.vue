<script setup>
defineProps({
  searchInput: {
    type: String,
    required: false,
  },
  favoritesQuantity: {
    type: Number,
    required: false,
  },
  cartItemsQuantity: {
    type: Number,
    required: false,
  },
  handleNavbarIconsClick: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div>
    <form>
      <input
        type="text"
        :id="searchInput"
        :name="searchInput"
        :value="searchInput"
      />
    </form>
    <button onclick="handleNavbarIconsClick('favorites')">
      {{ favoritesQuantity }}
    </button>
    <button onclick="handleNavbarIconsClick('cart')">
      {{ cartItemsQuantity }}
    </button>
  </div>
</template>

<style scoped></style>
