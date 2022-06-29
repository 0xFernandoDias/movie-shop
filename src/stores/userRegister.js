import { defineStore } from 'pinia'

export const useUserRegisterStore = defineStore({
  id: 'userRegister',
  state: () => ({
    userRegister: {},
  }),
  getters: {
    getUserName: (state) => state.userRegister.name,
  },
  actions: {
    resetUserRegister: () => {
      this.state.userRegister = {}
    },
  },
})
