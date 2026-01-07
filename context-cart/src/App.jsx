import React from 'react'
import NavBar from './components/NavBar'
import Products from './components/Products'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart'

const App = () => {
  return (
    <CartContextProvider>
      <NavBar />
      <Products />
      <Cart />
    </CartContextProvider>
  )
}

export default App
