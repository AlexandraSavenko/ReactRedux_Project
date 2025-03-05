import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "notes",
    initialState: {
        value: [], 
    },
    reducers: {
        userNotes: (state, action) => 
     {state.value.push(action.payload)},
        deleteNote: (state, action) => {
            state.value = state.value.filter(note => note.id !== action.payload)
        }
    }
})

export const {userNotes, deleteNote} = slice.actions
export default slice.reducer