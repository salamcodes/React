function Card({ name, username, email, phone }) {
    return (
        <>
            <div className="bg-yellow-100 w-full max-w-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition m-2 cursor-pointer">

                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <p className="text-sm text-indigo-600">{username}</p>
                </div>

                <div className="border-t my-4"></div>

                <div className="space-y-2 text-sm text-gray-700">
                    <p>
                        <span className="font-semibold">Email:</span> {email}
                    </p>
                    <p>
                        <span className="font-semibold">Phone:</span> {phone}
                    </p>
                </div>

            </div>

        </>
    )
}

export default Card
