import { combineReducers } from "@reduxjs/toolkit";
import UserAction from "../applications/actions/UserActions";
const _reducer = combineReducers({
  UserAction,
});

export default _reducer