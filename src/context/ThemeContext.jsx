import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true)
  const [view, setView] = useState();


  const toggleTheme = () => {
    setTheme(!theme)
  }

  const toggleView = () => {
    setView(!view)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, view, toggleView }}>
      {children}
    </ThemeContext.Provider>
  )
}
