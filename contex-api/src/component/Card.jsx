import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Card = () => {
    const { user } = useContext(userContext)

    if (!user) {
        return <h1>No User found</h1>
    }
    return (
        <>

            <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">{user.name}</h2>
                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Email: {user.email}</span>
                </p>
                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Contact: {user.contact}</span>
                </p>

            </div>

        </>
    )
}

export default Card
