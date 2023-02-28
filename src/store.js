// store manages all reducers and ata
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

export let store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
