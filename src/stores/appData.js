import { defineStore } from 'pinia'

export const useAppDataStore = defineStore({
  id: 'appData',
  state: () => ({
    isFavoritesVisible: false,
    isCartVisible: false,
    isModalVisible: false,
  }),
  getters: {
    getIsFavoritesVisible: (state) => state.isFavoritesVisible,
    getIsCartVisible: (state) => state.isCartVisible,
    getIsModalVisible: (state) => state.isModalVisible,
  },
  actions: {
    showFavorites() {
      this.isFavoritesVisible = true
      this.isCartVisible = false
    },
    hideFavorites() {
      this.isFavoritesVisible = false
    },
    showCart() {
      this.isCartVisible = true
      this.isFavoritesVisible = false
    },
    hideCart() {
      this.isCartVisible = false
    },
    hideMenus() {
      this.isCartVisible = false
      this.isFavoritesVisible = false
    },
    showModal() {
      this.isModalVisible = true
    },
    hideModal() {
      this.isModalVisible = false
    },
  },
})
