import { defineStore } from 'pinia'

export const useUserRegisterStore = defineStore({
  id: 'userRegister',
  state: () => ({
    userRegister: {},
  }),
  getters: {
    getUserRegister: (state) => state.useUserRegister,
    getUserName: (state) => state.userRegister.name,
  },
  actions: {
    resetUserRegister: () => {
      this.state.userRegister = {}
    },
  },
})
