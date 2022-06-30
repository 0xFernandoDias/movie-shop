import { defineStore } from 'pinia'

export const useUserRegisterStore = defineStore({
  id: 'userRegister',
  state: () => ({
    userRegister: {
      name: '',
      cpf: '',
      phone: '',
      email: '',
      zip: '',
      address: '',
      city: '',
      state: '',
    },
  }),
  getters: {
    getUserRegister: (state) => state.useUserRegister,
    getUserName: (state) => state.userRegister.name,
  },
  actions: {
    resetUserRegister: () => {
      this.userRegister = {}
    },
  },
})
