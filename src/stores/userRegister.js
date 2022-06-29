import { defineStore } from 'pinia'

export const useUserRegisterStore = defineStore({
  id: 'userRegister',
  state: () => ({
    userRegister: null,
  }),
  getters: {
    userName: () => {},
  },
  actions: {
    resetUserRegister: () => {},
  },
})
