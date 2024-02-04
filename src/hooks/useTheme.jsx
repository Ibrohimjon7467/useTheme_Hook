import { useState, useEffect } from "react"

function useTheme() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") === 'dark' ? true : false)

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(!theme)
  }

  return [theme, toggleTheme]
}

export default useTheme