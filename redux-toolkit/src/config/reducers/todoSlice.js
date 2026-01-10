import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'Todo',

    initialState: {
        todos: [
            {
                id: 1,
                title: "nothing is here"
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.push(
                state.todos.push({
                    id: nanoid,
                    title: action.payload.title
                })
            )
        }
    }
})

