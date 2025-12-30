import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [users, setUsers] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setUsers(res)
      })
      .catch(() => {
        setError(true)
      })
  }, [])



  return (
    <>
      <div className='flex justify-center items-center flex-wrap'>
        {users ? users.map((item) => {
          return <Card name={item.name} username={item.username} email={item.email} phone={item.phone} />

        }) : error ? <h1 className='text-4xl font-bold'>Error Occured</h1> : <h1>Loading....</h1>}
      </div>
    </>
  )
}

export default App
