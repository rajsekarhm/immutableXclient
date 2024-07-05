import { createSlice, nanoid } from "@reduxjs/toolkit";
let initialState = {
  users: []
}
export const crud_operations = createSlice({
  name: "crud",
  initialState ,
  reducers: {
    create: (state, action) => {
      console.log(action.type)
      console.log(action.payload)
    },
    get: (state,action) => {
      console.log(action.type)
    },
    update: (state, action) => {
    },
  },
});

export const { create, get, update } = crud_operations.actions;

export default crud_operations.reducer;
