import { configureStore } from "@reduxjs/toolkit";
import _reducer from "./controller";
const store = configureStore({
  reducer: _reducer
});

export default store;

