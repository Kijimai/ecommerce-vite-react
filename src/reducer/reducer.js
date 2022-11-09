const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SIDEBAR":
      return { ...state, showSidebar: true }
    case "HIDE_SIDEBAR":
      return { ...state, showSidebar: false }
    case "SHOW_OVERLAY":
      // Only allow for overlay to show above 768px screen width
      if (state.screenWidth < 769) return state
      return { ...state, showingOverlay: true }
    case "HIDE_OVERLAY":
      return { ...state, showingOverlay: false }
    case "SHOW_CART":
      return { ...state, showingCart: true }
    case "HIDE_CART":
      return { ...state, showingCart: false }
    case "INCREASE_AMOUNT":
      const increasedAmount = state.amount + 1
      return { ...state, amount: increasedAmount }
    case "DECREASE_AMOUNT":
      const decreasedAmount = () => {
        if (state.amount <= 0) return 0
        return state.amount - 1
      }
      return { ...state, amount: decreasedAmount() }
    case "ADD_TO_CART":
      const { item, amount } = action.payload
      const hasItem = state.cart.find((product) => {
        return product.productId === item.productId
      })
      if (hasItem) {
        console.log("the item exists")
        const updatedItem = { ...hasItem, amount }
        return { ...state, amount: 0, cart: [updatedItem] }
      } else {
        const newItem = { ...item, amount }
        return { ...state, amount: 0, cart: [...state.cart, newItem] }
      }
    case "UPDATE_CART":
      return { ...state }
    case "REMOVE_ITEM":
      // const { id: itemId } = action.payload
      // const newCart = state.cart.filter((product) => {
      //   return product.productId !== itemId
      // })
      return { ...state, cart: [] }
    case "GET_TOTAL_CART":
      const totalCartCount = state.cart.reduce((total, currentItem) => {
        return total + currentItem.amount
      }, 0)
      return { ...state, totalCartSize: totalCartCount }
    case "READ_SCREENWIDTH":
      return { ...state, screenWidth: action.payload }
    default:
      return state
  }
}

export default reducer
