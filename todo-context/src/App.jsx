import React, { useEffect, useState } from 'react'
import { TodoProvider } from './context'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

const App = () => {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {

    setTodos((prev) => {
      return [...prev, todo]
    })
    // console.log(todo)
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

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}>
      <TodoForm />

      {
        todos.length > 0 && todos.map((todo) => {
          return <div key={todo.id}>

            <TodoItem todo={todo} />

          </div>
        })
      }

    </TodoProvider>
  )
}

export default App
