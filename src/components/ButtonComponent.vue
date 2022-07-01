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
  <button
    as="div"
    :class="`${color} h-12 text-gray-50 rounded`"
    :onclick="() => onClick()"
  >
    <b>{{ text }}</b>
  </button>
</template>
