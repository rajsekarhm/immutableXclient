import { configureStore, createSlice, nanoid,compose,applyMiddleware } from "@reduxjs/toolkit";
import user_reducer from './slice'

const store = configureStore({
    reducer: {
        user:user_reducer
    },
   
})

export type AppDispatch = typeof store.dispatch;

export default store