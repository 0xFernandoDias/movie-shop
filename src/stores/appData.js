import { defineStore } from 'pinia'

export const useAppDataStore = defineStore({
  id: 'appData',
  state: () => ({
    menuBox: 'none',
    showModal: false,
    formsOkay: false,
  }),
})
