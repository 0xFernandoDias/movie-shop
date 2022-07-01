<script setup>
defineProps({
  color: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <font-awesome-icon
    icon="fa-solid fa-heart"
    :class="'fa-2xl hover:opacity-80'"
    :style="{ color }"
  />
</template>
