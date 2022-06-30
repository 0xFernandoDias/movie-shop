<script setup>
import { useAppDataStore } from '../stores/appData'

import FormsContainer from '../components/FormsContainer.vue'
import CheckoutContainer from '../components/CheckoutContainer.vue'
import ModalComponent from '../components/ModalComponent.vue'

const appDataStore = useAppDataStore()
</script>

<template>
  <main class="column">
    <h1>Checkout</h1>
    <div class="row">
      <FormsContainer />
      <CheckoutContainer />
      <div v-show="appDataStore.showModal">
        <ModalComponent />
      </div>
    </div>
  </main>
</template>
