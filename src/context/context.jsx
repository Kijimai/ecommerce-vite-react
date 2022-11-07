import { useEffect, useContext, createContext, useReducer } from "react"
import reducer from "../reducer/reducer"
import { defaultState } from "../reducer/defaultState"
import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  SHOW_OVERLAY,
  HIDE_OVERLAY,
  SHOW_CART,
  HIDE_CART,
  READ_SCREENWIDTH,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  REMOVE_ITEM,
  ADD_TO_CART,
  UPDATE_CART,
} from "../reducer/actions"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const showSidebar = () => {
    dispatch({ type: SHOW_SIDEBAR })
  }

  const hideSidebar = () => {
    dispatch({ type: HIDE_SIDEBAR })
  }

  const showImageOverlay = () => {
    dispatch({ type: SHOW_OVERLAY })
  }

  const hideImageOverlay = () => {
    dispatch({ type: HIDE_OVERLAY })
  }

  const showCart = () => {
    dispatch({ type: SHOW_CART })
  }

  const hideCart = () => {
    dispatch({ type: HIDE_CART })
  }

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } })
  }

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } })
  }

  const addToCart = (amount, item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        item,
        amount,
      },
    })
  }

  const updateCart = () => {
    dispatch({ type: UPDATE_CART })
  }

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM, payload: state.cart })
  }

  const readScreenWidth = () => {
    dispatch({ type: READ_SCREENWIDTH, payload: window.innerWidth })
  }

  useEffect(() => {
    console.log(state.amount)
  }, [state.amount])

  useEffect(() => {
    window.addEventListener("resize", readScreenWidth)
    console.log(state.screenWidth)
    return () => window.removeEventListener("resize", readScreenWidth)
  }, [state.screenWidth])

  return (
    <AppContext.Provider
      value={{
        state,
        showSidebar,
        hideSidebar,
        showImageOverlay,
        hideImageOverlay,
        showCart,
        hideCart,
        increaseAmount,
        decreaseAmount,
        addToCart,
        updateCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { useGlobalContext, AppProvider }
