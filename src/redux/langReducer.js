import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'lang',
    initialState: {value: "eng"},
    reducers: {
        language: (state, action) => {return {...state, value: action.payload}}
    }
})


export const {language} = slice.actions

export default slice.reducer

// export const language = createAction('switchLang')




// export default function langReducer (state = {value: "eng"}, action) {
//     switch (action.type) { 
//             case 'switchLang':
//             return {
//                 ...state,
//                     value: action.payload
//             }
//         default: return state}
// }