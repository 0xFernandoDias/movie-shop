<script setup>
import { ref } from 'vue'

const isEverythingOk = ref(false)
</script>

<template>
  <h1 class="text-3xl font-bold">Hello Checkout!</h1>
  {{ isEverythingOk }}
</template>

<style scoped></style>
