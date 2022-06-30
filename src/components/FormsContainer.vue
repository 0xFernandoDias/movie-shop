<script setup>
import { useUserRegisterStore } from '../stores/userRegister'
import { useAppDataStore } from '../stores/appData'

const userRegisterStore = useUserRegisterStore()

// eslint-disable-next-line no-unused-vars
const appDataStore = useAppDataStore()
// formsOkay
</script>

<template>
  <div class="column">
    <input type="text" v-model="userRegisterStore.name" placeholder="Name" />
    <div class="row">
      <input type="text" v-model="userRegisterStore.cpf" placeholder="CPF" />
      <input type="tel" v-model="userRegisterStore.phone" placeholder="Phone" />
    </div>
    <input
      type="email"
      v-model="userRegisterStore.email"
      placeholder="E-mail"
    />
    <div class="row">
      <input
        type="text"
        v-model="userRegisterStore.zip"
        placeholder="Zip Code"
      />
      <input
        type="text"
        v-model="userRegisterStore.address"
        placeholder="Address"
      />
    </div>
    <div class="row">
      <input type="text" v-model="userRegisterStore.city" placeholder="City" />
      <input
        type="text"
        v-model="userRegisterStore.state"
        placeholder="State"
      />
    </div>
  </div>
</template>
