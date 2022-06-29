import { router } from 'vue-router'

export function handleNavbarIconsClick(icon) {
  if (icon === 'favorites') {
    this.state.menuBox = 'favorites'
  } else if (icon === 'cart') {
    this.state.menuBox = 'cart'
  } else {
    this.state.menuBox = 'none'
  }
}
export function handleMenuBoxSubmit() {
  router.push({ name: 'checkout' })
  // validations
}
export function handleCheckoutSubmit() {
  this.showModal = true
  // validations
}
export function handleModalSubmit(
  deleteAllCartItems,
  deleteAllFavorites,
  resetUserRegister
) {
  deleteAllCartItems()
  deleteAllFavorites()
  resetUserRegister()
  router.push({ name: '/' })
}
