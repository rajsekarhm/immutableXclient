import { createSlice, nanoid } from "@reduxjs/toolkit";
let initialState = {

}
export const crud_operations = createSlice({
  name: "crud",
  initialState ,
  reducers: {
    create: (state, action) => {
      console.log(action.payload)
    },
    get: (state,action) => {
      console.log(action.payload)
    },
    update: (state, action) => {
    },
  },
});

export const { create, get, update } = crud_operations.actions;

export default crud_operations.reducer;
