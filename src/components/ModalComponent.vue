<script setup>
defineProps({
  userName: {
    type: String,
    required: true,
  },
  handleClick: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div>
    Hello {{ userName }}
    <button :onclick="() => handleClick()">ok</button>
  </div>
</template>

<style scoped></style>
