import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoItem = ({ todo }) => {
    const [editing, setEditing] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { udpateTodo, deleteTodo, toggleComplete } = useTodo()


    function edit() {
        udpateTodo(todo.id, { ...todo, todo: todoMsg })
    }

    
    return (
        <>


            {/* Checkbox */}
            <input type="checkbox" className="w-4 h-4" />

            {/* Todo Input (Read Only / Editable) */}
            <input
                type="text"
                value={todoMsg}
                readOnly={!editing}
                className={`flex-1 px-2 py-1 rounded-md border focus:outline-none ${editing ? "bg-white border-black" : "bg-transparent border-transparent"
                    }`}
            />

            {/* Edit / Save Button */}
            <button
                className="px-3 py-1 border rounded-md text-sm"
            >

            </button>

            {/* Delete Button */}
            <button className="px-3 py-1 border rounded-md text-sm text-red-600">
                Delete
            </button>

        </>
    )
}

export default TodoItem
