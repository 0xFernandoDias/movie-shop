<script setup>
defineProps({
  text: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  onClick: {
    type: Function,
    required: false,
  },
})
</script>

<template>
  <button :class="`bg-${color}`" onclick="onClick">{{ text }}</button>
</template>

<style scoped></style>
