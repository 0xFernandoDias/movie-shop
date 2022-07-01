import { defineStore } from 'pinia'

export const useAppDataStore = defineStore({
  id: 'appData',
  state: () => ({
    isFavoritesVisible: false,
    isCartVisible: false,
    showModal: false,
    formsOkay: false,
  }),
})
