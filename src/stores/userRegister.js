import { defineStore } from 'pinia'

export const useUserRegisterStore = defineStore({
  id: 'userRegister',
  state: () => ({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    zip: '',
    address: '',
    city: '',
    state: '',
  }),
  getters: {
    getUserRegister: (state) => {
      return state
    },
    getUserName: (state) => {
      return state.name
    },
    isUserRegisterFilled: (state) => {
      if (
        state.name !== '' &&
        state.cpf !== '' &&
        state.phone !== '' &&
        state.email !== '' &&
        state.zip !== '' &&
        state.address !== '' &&
        state.city !== '' &&
        state.state !== ''
      ) {
        return true
      } else false
    },
  },
  actions: {
    resetUserRegister() {
      this.name = ''
      this.cpf = ''
      this.phone = ''
      this.email = ''
      this.zip = ''
      this.address = ''
      this.city = ''
      this.state = ''
    },
  },
})
