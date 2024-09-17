import { createSlice, nanoid } from "@reduxjs/toolkit";
import { browserStorage } from "../../browser_utils/Storage";

interface ICrudOperationsType {
  [key:string]:string | number
}
let initialState : ICrudOperationsType = {} 

type actionType = {
  payload:any,
  type:string
}
export const crud_operations = createSlice({
  name: "crud",
  initialState ,
  reducers: {
    create: (_state:ICrudOperationsType, action:actionType) => {
      const {firstname} = action.payload
      browserStorage.storeInStorage(firstname.toString(),JSON.stringify(action.payload))
        },
    get: (_state,action:actionType) => {
    },
    update: (state, action:actionType) => {
    },
  },
});

export const { create, get, update } = crud_operations.actions;

export default crud_operations.reducer;
