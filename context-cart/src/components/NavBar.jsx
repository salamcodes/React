import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const NavBar = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <>


            <div className="w-full h-16 px-6 flex items-center justify-between border-b">
                {/* Logo */}
                <div className="text-xl font-bold">
                    MyStore
                </div>

                {/* Cart */}
                <div className="relative cursor-pointer">

                    {/* Cart Count */}

                    <div className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center 
                          bg-red-500 text-white rounded-full">
                        {cartItems.length}
                    </div>


                </div>
            </div>


        </>
    )
}

export default NavBar
