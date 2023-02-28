// use of rducer is to manage its own adata, state and acion
// actions are what need to be performed
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: []
};
// creating slice which manages data
let todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    update: (state, action) => {
      state.value[action.payload.ind] = action.payload.txt;
    },
    delete1: (state, action) => {
      console.log(action.payload);
      state.value.splice(action.payload, 1);
    }
  }
});
// a gateway for listening to data
export let todoSelector = (state) => state.todo.value;

// for components to access action to dispatch them
export let { add } = todoSlice.actions;
export let { update } = todoSlice.actions;
export let { delete1 } = todoSlice.actions;
// it is for reducer
export default todoSlice.reducer;
