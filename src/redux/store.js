
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import balanceReducer from "./balanceReducer";
import langReducer from "./langReducer";
import notesReducer from './notesReducer'




const persistBalanceConfig = {
    key: 'user-balance',
    storage,
    whitelist: ["value"]
  }
  const persistLangConfig = {
    key: 'user-lang',
    storage,
    whitelist: ["value"]
  }

  const persistNotesConfig = {
    key: 'user-notes',
    storage,
    whitelist: ['value']
  }
const persistedBalanceReducer = persistReducer(persistBalanceConfig, balanceReducer)
const persistedLocaleReducer = persistReducer(persistLangConfig, langReducer)
const persistedNotesReducer = persistReducer(persistNotesConfig, notesReducer)

export const store = configureStore({
    reducer: {lang: persistedLocaleReducer,
        balance: persistedBalanceReducer,
        notes: persistedNotesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store)