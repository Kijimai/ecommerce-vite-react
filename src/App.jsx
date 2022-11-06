import { Main, Navigator, Sidebar } from "./layout/index"
import { useGlobalContext } from "./context/context"

function App() {
  const { state } = useGlobalContext()

  return (
    <div className="App">
      <Navigator />
      <Main />
      <Sidebar isShowing={state.showSidebar} />
    </div>
  )
}

export default App
