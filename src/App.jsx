import useTheme from "./hooks/useTheme"

function App() {

  const [theme, toggleTheme] = useTheme()

  return (
    <div>
      <h1>useTheme Custom Hook</h1>
      <button onClick={() => toggleTheme()}>Change Mode</button>
    </div>
  )
}

export default App