<script setup>
defineProps({
  userRegister: {
    type: {
      name: { type: String, required: false },
      cpf: { type: String, required: false },
      phone: { type: String, required: false },
      email: { type: String, required: false },
      zipCode: { type: String, required: false },
      address: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
    },
    required: true,
  },
  isEverythingOk: { type: Boolean, required: true },
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
