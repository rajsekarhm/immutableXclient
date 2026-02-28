import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './actions/UserActions';
import { assetReducer } from './actions/AssetActions';
import { tokenReducer } from './actions/TokenActions';
import { custodianReducer } from './actions/CustodianActions';

const store = configureStore({
  reducer: {
    user: userReducer,
    asset: assetReducer,
    token: tokenReducer,
    custodian: custodianReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;