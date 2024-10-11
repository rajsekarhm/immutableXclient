import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState: number = 0;

export const math_operationss = createSlice({
  name: "crud",
  initialState,
  reducers: {
    increment: (_state = initialState, action) => {
      console.log(action);
      return _state + 1;
    },
    decrement: (_state = initialState, action) => {
      console.log(action);
      return _state - 1;
    },
  },
});

export { initialState };

export const { increment, decrement } = math_operationss.actions;

export default math_operationss.reducer;
