import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io"

export const fetchTasks = createAsyncThunk("tasks/getAll", async (_, thunkAPI)=>{
    try {
         const response = await axios.get('/tasks')
    return response.data 
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
  
})
export const addTasks = createAsyncThunk('tasks/addTask', async (task, thunkAPI) => {
    try {
        const response = await axios.post('/tasks', task)
        return response.date
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
})