
import { configureStore, createAction } from "@reduxjs/toolkit";


const ACTIONS = {
    SWITCHLANG: 'switchLang',
    DEPOSIT: 'balance/deposite',
    WITHDRAW: 'balance/withdraw'
}
const initialState = {
    lang: {
value: "eng"
    },
    balance: {
        value: 0
    }

}
export const language = createAction('switchLang')


export const deposit = createAction('balance/deposite')
export const withdraw = createAction('balance/withdraw')

const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case ACTIONS.DEPOSIT:
       return {...state, 
balance: {value: state.balance.value + action.payload} 
        }
case ACTIONS.WITHDRAW:
    return {
        ...state,
        balance: {value: state.balance.value - action.payload}
    }

    case ACTIONS.SWITCHLANG:
        return {
            ...state,
            lang: {
                value: action.payload
            }
        }
    default: return state
}
}

export const store = configureStore({
    reducer: rootReducer
})