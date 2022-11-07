const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SIDEBAR":
      return { ...state, showSidebar: true }
    case "HIDE_SIDEBAR":
      return { ...state, showSidebar: false }
    case "SHOW_OVERLAY":
      return { ...state, showingOverlay: true }
    case "HIDE_OVERLAY":
      return { ...state, showingOverlay: false }
    case "INCREASE_AMOUNT":
      const increasedAmount = state.amount + 1
      return { ...state, amount: increasedAmount }
    case "DECREASE_AMOUNT":
      const decreasedAmount = () => {
        if(state.amount <= 0) return 0
        return state.amount - 1
      }
      return { ...state, amount: decreasedAmount() }
    case "ADD_TO_CART":
      console.log("Adding to cart")

      return { ...state }
    case "UPDATE_CART":
      return { ...state }
    case "READ_SCREENWIDTH":
      return { ...state, screenWidth: action.payload }
    default:
      return state
  }
}

export default reducer
