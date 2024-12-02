import { configureStore } from "@reduxjs/toolkit";
import user_reducer from './actions/UserActions'
import asset_reducer  from './actions/AssetActions'
import token_reducer from './actions/TokenActions'

const store = configureStore({
    reducer: {
        user:user_reducer,
        asset:asset_reducer,
        token:token_reducer
    },
   
})

export type AppDispatch = typeof store.dispatch;

export default store