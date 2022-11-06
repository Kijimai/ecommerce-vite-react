import { useEffect, useContext, createContext, useReducer } from "react"
import reducer from "../reducer/reducer"
import { defaultState } from "../reducer/defaultState"
import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  SHOW_OVERLAY,
  HIDE_OVERLAY,
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

  return (
    <AppContext.Provider
      value={{
        state,
        showSidebar,
        hideSidebar,
        showImageOverlay,
        hideImageOverlay,
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
