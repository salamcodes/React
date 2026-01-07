import React from 'react'
import { ThemeContextProvider, useTheme } from './context/ThemContext'
import Btn from './components/Btn'
import Card from './components/Card'

const App = () => {
    const {themeMode , darkMode , lightMode} = useTheme()
    return (
        <ThemeContextProvider value={{darkMode, lightMode }}>

            <Btn />
            <Card />


        </ThemeContextProvider>
    )
}

export default App
