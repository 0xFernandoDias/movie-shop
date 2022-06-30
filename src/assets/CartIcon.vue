<script setup>
defineProps({
  location: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- onHover -->
  <font-awesome-icon
    :icon="
      location === 'menuBox'
        ? 'fa-solid fa-cart-shopping'
        : 'fa-solid fa-cart-shopping fa-2xl'
    "
    :style="
      location === 'menuBox' ? { color: '#10b981' } : { color: '#f9fafb' }
    "
  />
</template>

<style scoped></style>
