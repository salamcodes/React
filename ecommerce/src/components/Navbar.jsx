import React from 'react'
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">


                <div className="flex items-center gap-4">
                    <FiSearch className="text-xl cursor-pointer" />
                    <FiShoppingCart className="text-xl cursor-pointer" />
                    <FiUser className="text-xl cursor-pointer" />
                </div>


                <div className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">
                    MyLogo
                </div>


                <ul className="hidden md:flex items-center gap-6 font-medium">
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">Products</li>
                    <li className="cursor-pointer hover:text-blue-600">About</li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col items-center gap-4 py-4 font-medium">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Products</li>
                        <li className="cursor-pointer">About</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
