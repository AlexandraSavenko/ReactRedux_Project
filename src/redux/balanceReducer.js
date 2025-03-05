import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'balance',
    initialState: {value: 0},
    reducers: {
        deposit: (state, action) => {
            return {...state, value: state.value + action.payload}

        },
        withdraw: (state, action) => {
            return {...state, value: state.value - action.payload}
        }
    }
})

export const {deposit, withdraw} = slice.actions

export default slice.reducer

// export const deposit = createAction('balance/deposite')
// export const withdraw = createAction('balance/withdraw')

// export default function balanceReducer (state = {value: 0}, action) {
//     switch (action.type) {
//         case 'balance/deposite':
//            return {...state, 
//     value: state.value + action.payload
//             }
//     case 'balance/withdraw':
//         return {
//             ...state,
//             value: state.value - action.payload
//         }
//         default: return state}
// }