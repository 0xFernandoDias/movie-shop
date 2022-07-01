<script setup>
import { useAppDataStore } from '../stores/appData'

import FormsContainer from '../components/FormsContainer.vue'
import CheckoutContainer from '../components/CheckoutContainer.vue'
import ModalComponent from '../components/ModalComponent.vue'

const appDataStore = useAppDataStore()
</script>

<template>
  <div class="h-full">
    <main class="w-full flex flex-col flex-wrap px-32 py-32 gap-12">
      <h1>Checkout</h1>
      <div class="flex flex-row justify-between">
        <FormsContainer />
        <CheckoutContainer />
      </div>
    </main>
    <div v-show="appDataStore.showModal">
      <ModalComponent />
    </div>
  </div>
</template>
