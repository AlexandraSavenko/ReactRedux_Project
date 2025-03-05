
import { configureStore, createAction } from "@reduxjs/toolkit";
import balanceReducer from "./balanceReducer";
import langReducer from "./langReducer";




export const store = configureStore({
    reducer: {lang: langReducer,
        balance: balanceReducer,
    }
})