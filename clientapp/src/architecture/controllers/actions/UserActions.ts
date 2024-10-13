import { createSlice, nanoid } from "@reduxjs/toolkit";
var initialState = { value: "" };

export const userActions = createSlice({
  name: "user_actions",
  initialState,
  reducers: {
    create: (state: any, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { create } = userActions.actions;

export default userActions.reducer;
