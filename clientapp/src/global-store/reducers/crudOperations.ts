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
      console.log(action.payload.name,action.payload)
      browserStorage.storeInStorage(action.payload.name,action.payload)
    },
    get: (_state,action:actionType) => {
      console.log(action.payload)
    },
    update: (state, action:actionType) => {
    },
  },
});

export const { create, get, update } = crud_operations.actions;

export default crud_operations.reducer;
