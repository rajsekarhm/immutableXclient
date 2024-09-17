import { createSlice, nanoid } from "@reduxjs/toolkit";
import { userContract, userContractType } from "../types/state_types/UserType";
import {
  custodianContract,
  custodianContractType,
} from "../types/state_types/CustodianType";
var initialState = custodianContract;
export const userActions = createSlice({
  name: "user_actions",
  initialState,
  reducers: {
    createUser: (state: custodianContractType, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { createUser } = userActions.actions;
export default userActions.reducer;
