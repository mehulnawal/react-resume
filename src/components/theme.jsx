import { createContext, useState } from "react"

// create context api
export const ThemeContext = createContext()

// create provider
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark");

    return <>
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    </>
}