

export default async function Home() {

  interface User {
    name: string,
    id: number,
    email: string,
    website: string,
    username: string
  }

  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json()
  console.log(users)

  return (
    <>
      



        <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-wrap gap-2">
          {
            users.map((item: User) => {
              return <div key={item.id} className="w-80 bg-white p-6 rounded-xl shadow-lg">

                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Username:</span> {item.username}
                </p>

                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Email:</span> {item.email}
                </p>

                <p className="text-sm mt-3 cursor-pointer text-blue-600 hover:underline">
                  {item.website}
                </p>

              </div>

            })
          }
        </div>

     

    </>
  );
}
