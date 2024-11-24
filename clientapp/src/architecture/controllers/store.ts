import { configureStore } from "@reduxjs/toolkit";
import user_reducer from './slice'
import asset_reducer  from './slice2'

const store = configureStore({
    reducer: {
        user:user_reducer,
        asset:asset_reducer
    },
   
})

export type AppDispatch = typeof store.dispatch;

export default store