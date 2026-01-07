import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Proucts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { setCartItems } = useContext(CartContext)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data.products)
                setLoading(false)

            })
            .catch(() => {
                setError(true)
            })
    }, [])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error Occured </h1>

    function AddToCart(id) {
        setCartItems(prevItems => [...prevItems, data[id]])
    }

    return (
        <>
            <div className='flex justify-center items-center gap-3 flex-wrap'>


                {
                    data.map((item, index) => {
                        return <div key={index} className="w-64 border rounded-xl p-4 shadow-sm hover:shadow-md transition">
                            <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={item.images[0]}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            <h3 className="mt-3 text-lg font-semibold">
                                {item.title}
                            </h3>


                            <p className="text-gray-600 mt-1">
                                ${item.price}
                            </p>

                            <button className="mt-4 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition cursor-pointer" onClick={() => AddToCart(item.id)}>
                                Add to Cart
                            </button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Proucts
