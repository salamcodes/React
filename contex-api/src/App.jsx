import React from 'react'
import {UserProvider} from './context/UserContext'
import Form from './component/Form'
import Card from './component/Card'

const App = () => {
  return (
    <UserProvider>
      <Form />
      <Card />
    </UserProvider>
  )
}

export default App
