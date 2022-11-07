import { Main, Navigator, Sidebar } from "./layout/index"
import { useGlobalContext } from "./context/context"

function App() {
  const { state } = useGlobalContext()

  return (
    <div className="App">
      <Navigator />
      <Sidebar isShowing={state.showSidebar} />
      <Main />
    </div>
  )
}

export default App
