import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./taskOps";

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
        .addCase(fetchTasks.rejected, (state) => state.error = true)


    }
}
)

export default slice.reducer

