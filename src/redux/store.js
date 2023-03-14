import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import sort from "./slices/filterSlice";
export const store = configureStore({
  reducer: { filter, sort },
});
