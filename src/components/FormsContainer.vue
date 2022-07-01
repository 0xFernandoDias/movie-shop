<script setup>
import { useUserRegisterStore } from '../stores/userRegister'

const userRegisterStore = useUserRegisterStore()
</script>

<template>
  <div class="flex flex-col w-[40%] gap-8">
    <form
      class="flex flex-row bg-gray-50 h-10 items-center px-2 rounded border-2 border-gray-400"
    >
      <input
        type="text"
        style="outline: 0"
        class="w-full bg-gray-50 text-lg"
        v-model="userRegisterStore.name"
        placeholder="Name"
      />
    </form>
    <div class="flex flex-row justify-between">
      <form
        class="flex flex-row bg-gray-50 w-[45%] h-10 items-center px-2 rounded border-2 border-gray-400"
      >
        <input
          type="text"
          style="outline: 0"
          class="w-full bg-gray-50 text-lg"
          v-model="userRegisterStore.cpf"
          placeholder="CPF"
        />
      </form>
      <form
        class="flex flex-row bg-gray-50 w-[45%] h-10 items-center px-2 rounded border-2 border-gray-400"
      >
        <input
          type="tel"
          style="outline: 0"
          class="w-full bg-gray-50 text-lg"
          v-model="userRegisterStore.phone"
          placeholder="Phone"
        />
      </form>
    </div>
    <form
      class="flex flex-row bg-gray-50 h-10 items-center px-2 rounded border-2 border-gray-400"
    >
      <input
        type="email"
        style="outline: 0"
        class="w-full bg-gray-50 text-lg"
        v-model="userRegisterStore.email"
        placeholder="E-mail"
      />
    </form>
    <div class="flex flex-row justify-between">
      <form
        class="flex flex-row bg-gray-50 w-[45%] h-10 items-center px-2 rounded border-2 border-gray-400"
      >
        <input
          type="text"
          style="outline: 0"
          class="w-full bg-gray-50 text-lg"
          v-model="userRegisterStore.zip"
          placeholder="Zip Code"
        />
      </form>
      <form
        class="flex flex-row bg-gray-50 w-[45%] h-10 items-center px-2 rounded border-2 border-gray-400"
      >
        <input
          type="text"
          style="outline: 0"
          class="w-full bg-gray-50 text-lg"
          v-model="userRegisterStore.address"
          placeholder="Address"
        />
      </form>
    </div>
    <div class="flex flex-row justify-between">
      <form
        class="flex flex-row bg-gray-50 h-10 w-[45%] items-center px-2 rounded border-2 border-gray-400"
      >
        <input
          type="text"
          style="outline: 0"
          class="w-full bg-gray-50 text-lg"
          v-model="userRegisterStore.city"
          placeholder="City"
        />
      </form>
      <form
        class="flex flex-row bg-gray-50 h-10 w-[45%] items-center px-2 rounded border-2 border-gray-400"
      >
        <input
          type="text"
          style="outline: 0"
          class="w-full bg-gray-50 text-lg"
          v-model="userRegisterStore.state"
          placeholder="State"
        />
      </form>
    </div>
  </div>
</template>
