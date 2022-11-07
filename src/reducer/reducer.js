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

      return { ...state }  
    case "DECREASE_AMOUNT":

      return { ...state}   
    case "READ_SCREENWIDTH":
      return { ...state, screenWidth: action.payload }
    default:
      return state
  }
}

export default reducer
