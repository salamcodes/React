import React, { useEffect, useState } from 'react'
import { ThemeContextProvider, useTheme } from './context/ThemContext'
import Btn from './components/Btn'
import Card from './components/Card'

const App = () => {
    const [themeMode, setThemeMode] = useState("light")

    const DarkMode = () => {
        setThemeMode("dark")
    }

    const LightMode = () => {
        setThemeMode("light")
    }

    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeContextProvider value={{ themeMode, DarkMode, LightMode }}>

            <Btn />
            <Card />


        </ThemeContextProvider>
    )
}

export default App
