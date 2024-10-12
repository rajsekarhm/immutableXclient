import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../CombineReducer";
const store = configureStore({
  reducer: rootReducer,
});

export default store;
