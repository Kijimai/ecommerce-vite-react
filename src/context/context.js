import { useEffect, useContext, createContext, useReducer } from "react"
import reducer from "../reducer/reducer"
import { defaultState } from "../reducer/defaultState"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { useGlobalContext, AppProvider }
