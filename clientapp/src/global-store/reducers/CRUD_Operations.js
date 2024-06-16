import { createSlice, nanoid } from "@reduxjs/toolkit";
export const crud_operations = createSlice({
  name: "crud",
  initialState: [ {name:'user1'}] ,
  reducers: {
    create: (state, action) => {
      const newItem = {
        id: nanoid(),
        text: action.payload,
      };
      if (!state.items) {
        state.items = [];
      }
      state.items.push(newItem);
      console.log(`State is created:`, state);
    },
    get: (state) => {
      // Implementation for getting data
    },
    update: (state, action) => {
      // Implementation for updating data
    },
  },
});

export const { create, get, update } = crud_operations.actions;

export default crud_operations.reducer;
