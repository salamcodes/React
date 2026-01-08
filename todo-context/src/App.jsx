import React, { useState } from 'react'
import { TodoProvider } from './context'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

const App = () => {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {

    setTodos((prev) => {
      return [...prev, todo]
    })
    console.log(todo)
  }


  function updateTodo(id, todo) {
    setTodos((prev) => prev.map((item) => item.id === id ? todo : item))

  }
  function deleteTodo(id) {

    setTodos((prev) => prev.filter((item) => item.id !== id))
  }
  function toggleComplete(id) {

    setTodos((prev) => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item))

  }
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}>
      <TodoForm />
      <div className="flex items-center gap-3 p-2 border rounded-lg w-full max-w-md mx-auto">

        <TodoItem />

      </div>
    </TodoProvider>
  )
}

export default App
