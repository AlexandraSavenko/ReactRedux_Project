import { createSlice } from "@reduxjs/toolkit";
import { addTasks, fetchTasks } from "./taskOps";

const slice = createSlice({
    name: 'tasks',
    initialState: {items: [],
        loading: false,
        error: false
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true;
            state.error = false;
        })  //link to the fabric is replaced with 'tasks/getall/pending'
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false
        })
        .addCase(fetchTasks.rejected, (state) => {
            state.error = true;
        state.loading = false})
        .addCase(addTasks.pending, state => {
            state.loading = true
        }).addCase(addTasks.fulfilled, (state, action) => {
            state.loading = false
            state.items.push(action.payload)
        })


    }
}
)

export default slice.reducer

