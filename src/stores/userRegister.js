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
        state.name.length > 2 &&
        state.cpf.length > 13 &&
        state.phone.length > 13 &&
        state.email.length > 10 &&
        state.zip.length > 8 &&
        state.address.length > 5 &&
        state.city.length > 1 &&
        state.state.length > 1
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
