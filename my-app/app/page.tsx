

export default async function Home() {

  interface User {
    name : string , 
    
  }

  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()

  return (
    <>

    userData.
<div>
  
</div>
    </>
  );
}
