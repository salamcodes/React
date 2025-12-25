import React, { useState } from 'react'

import './App.css'

function App() {
const [count , setCount] = useState(0);

function incCount(){
  setCount(count + 1);
}
function lessCount(){
  count > 0 ? setCount(count -1) : null
}

  return (
    <>
      <button onClick={incCount}>+</button>
      <h1>{count}</h1>
      <button onClick={lessCount}>-</button>
    </>
  )
}

export default App
