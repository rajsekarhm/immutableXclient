import { createSlice, nanoid } from "@reduxjs/toolkit";
import { userContract } from "../types/stateType/UserType";
var initialState = userContract;
export const userActions = createSlice({
  name: "user_actions",
  initialState,
  reducers: {
    createUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { createUser } = userActions.actions;
export default userActions.reducer;
