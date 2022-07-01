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
    icon="fa-solid fa-cart-shopping"
    :class="location !== 'menuBox' && 'fa-2xl'"
    :style="
      location === 'menuBox' ? { color: '#10b981' } : { color: '#f9fafb' }
    "
  />
</template>
