<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <button
    as="div"
    :class="`${color} h-12 text-gray-50 rounded w-full text-lg hover:opacity-80 active:opacity-60`"
    :onclick="() => onClick()"
  >
    <b>{{ text }}</b>
  </button>
</template>
