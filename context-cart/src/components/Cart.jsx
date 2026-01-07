import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext)

    function removeItem(id) {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }
    const total = cartItems.reduce((acc, val) => {
        return acc + val.price
    },0)
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">

                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

                {cartItems.length === 0 &&
                    < p className="text-gray-500">Your cart is empty</p>
                }

                {
                    cartItems.length > 0 && cartItems.map((item, index) => {
                        return <div key={index} className="space-y-4">

                            <div

                                className="flex items-center justify-between border rounded-xl p-4 m-1"
                            >
                                {/* Left */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />

                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>
                                </div>

                                {/* Right */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-600 cursor-pointer"
                                >
                                    Remove
                                </button>
                            </div>

                        </div>
                    })
                }
                <div className="mt-6 flex justify-between items-center border-t pt-4">
                    <h2 className="text-xl font-semibold">Total</h2>
                    <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
            </div >
        </>
    )
}

export default Cart
