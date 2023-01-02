import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []

}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        }
    }
});
console.log(todoSlice.state)

export const { saveTodo } = todoSlice.actions

export default todoSlice.reducer