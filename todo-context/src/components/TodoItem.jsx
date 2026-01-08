import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoItem = ({ todo }) => {
    const [editing, setEditing] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()


    function edit() {
        updateTodo(todo.id, { ...todo, todo: todoMsg })

        setEditing(false)
    }

    function deleteItem() {
        deleteTodo(todo.id)
    }

    function toggleCompleted() {
        toggleComplete(todo.id)
    }



    return (
        <>


            <div className={`flex items-center gap-3 p-2 border rounded-lg w-full max-w-md mx-auto ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}>

                {/* Checkbox */}
                <input
                    checked={todo.completed}
                    onChange={toggleCompleted}
                    type="checkbox" className="w-4 h-4" />

                {/* Todo Input (Read Only / Editable) */}
                <input
                    type="text"
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!editing}
                    className={`flex-1 px-2 py-1 rounded-md border focus:outline-none ${editing ? "bg-white border-black" : "bg-transparent border-transparent"
                        }`}
                />

                {/* Edit / Save Button */}
                <button
                    onClick={() => {
                        if (!editing) {
                            edit();
                        }
                        setEditing(prev => !prev);
                    }}
                    disabled={todo.completed}
                    className="px-3 py-1 border rounded-md text-sm"
                >
                    {editing ? "Save" : "Edit"}
                </button>

                {/* Delete Button */}
                <button
                    onClick={deleteItem}
                    className="px-3 py-1 border rounded-md text-sm text-red-600">
                    Delete
                </button>

            </div >
        </>
    )
}

export default TodoItem
