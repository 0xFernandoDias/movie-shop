import { defineStore } from 'pinia'

export const useAppDataStore = defineStore({
  id: 'appData',
  state: () => ({
    menuBox: 'none',
    searchInput: '',
    filteredMovies: [],
    showModal: false,
  }),
})
