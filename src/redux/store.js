import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import calculator from "./slices/calculatorSlice";

export const store = configureStore({
  reducer: { filter, cart, calculator },
});
