import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    function add(todo) {
        if (!todo) return
        addTodo({
            id: Date.now(),
            todo: todo,
            completed: false
        })

        setTodo("")

    }
    return (
        <>

            <div className="w-full max-w-md mx-auto p-4">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Add a task..."
                        className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black/50"
                    />
                    <button onClick={(event) => {
                        event.preventDefault()
                        add(todo)
                    }} type='submit'
                        className="px-4 py-2 rounded-lg bg-black text-white hover:bg-black/90 cursor-pointer">
                        Add
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoForm
