<script setup>
defineProps({
  location: {
    type: String,
    required: true,
  },
  // active
  active: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <font-awesome-icon
    icon="fa-solid fa-heart"
    :style="location === 'navbar' ? { color: '#f9fafb' } : { color: '#0f172a' }"
  />
</template>

<style scoped></style>
