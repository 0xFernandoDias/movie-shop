<script setup>
/* eslint-disable no-unused-vars */
import { ref, computed } from 'vue'
import FormsContainer from '../components/FormsContainer.vue'
import CheckoutContainer from '../components/CheckoutContainer.vue'
import { useUserRegisterStore } from '../stores/userRegister'
import { handleCheckoutSubmit } from '../helpers/index'
import ModalComponent from '../components/ModalComponent.vue'

const store = useUserRegisterStore()

const showModal = ref(false)

const userRegister = computed(() => {
  return store.getUserRegister
})
const userName = computed(() => {
  return store.getUserName
})
const cart = computed(() => {
  return store.getCart
})
const totalPrice = computed(() => {
  return store.getTotalPrice
})
const deleteCartItem = (movieTitle) => store.deleteCartItem(movieTitle)
</script>

<template>
  <div>
    <FormsContainer :userRegister="userRegister" />
    <CheckoutContainer
      :movies="cart"
      :deleteCartItem="deleteCartItem"
      :totalPrice="totalPrice"
      :handleSubmit="handleCheckoutSubmit"
    />
    <div>
      <ModalComponent :userName="userName" :handleClick="handleModalSubmit" />
    </div>
  </div>
</template>

<style scoped></style>
