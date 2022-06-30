<script setup>
/* eslint-disable no-unused-vars */
import { ref, computed } from 'vue'
import { useAppDataStore } from '../stores/appData'

import FormsContainer from '../components/FormsContainer.vue'
import CheckoutContainer from '../components/CheckoutContainer.vue'
import ModalComponent from '../components/ModalComponent.vue'

const appDataStore = useAppDataStore()
</script>

<template>
  <div>
    <FormsContainer />
    <CheckoutContainer />
    <div v-show="appDataStore.showModal">
      <ModalComponent />
    </div>
  </div>
</template>

<style scoped></style>
