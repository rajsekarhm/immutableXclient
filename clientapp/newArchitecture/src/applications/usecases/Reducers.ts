import { createSlice } from "@reduxjs/toolkit";
import CounterEntities from "../../domains/entities";
import CounterUseCase from "./CounterUseCase";

// Use initial state from CounterEntities
let initialState: any = {
  counter: new CounterEntities(), // Hold the entity instance in the state
};

export const math_operations = createSlice({
  name: "crud",
  initialState,
  reducers: {
    increment: (state, action) => {
      const usecase = new CounterUseCase(state.counter); // Use the counter from the state
      usecase.increase(); // Increment the counter
      return { ...state, counter: state.counter }; // Return updated state
    },
    decrement: (state, action) => {
      const usecase = new CounterUseCase(state.counter); // Use the counter from the state
      usecase.decrease(); // Decrement the counter
      return { ...state, counter: state.counter }; // Return updated state
    },
  },
});

export { initialState };

export const { increment, decrement } = math_operations.actions;

export default math_operations.reducer;
