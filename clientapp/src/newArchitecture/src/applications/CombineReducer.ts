import { combineReducers } from "@reduxjs/toolkit";
import math_operationss  from "./usecases/Reducers";
export const rootReducer = combineReducers({
    math:math_operationss // this is reducer state name
});
