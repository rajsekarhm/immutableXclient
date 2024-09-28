import { combineReducers } from "@reduxjs/toolkit";
import crudOperations from "./reducers/crudOperations";
import userActions from "./reducers/UserActions";
export const rootReducer = combineReducers({
  crudOperations,
  userActions,
});
