import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaPrice: {
    thinCrust: 0,
    traditional: 0,
  },
};

export const calculatorSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    setPizzaThinCrustPrice(state, action) {
      state.pizzaPrice.thinCrust = action.payload;
    },
    setPizzaTraditionalPrice(state, action) {
      state.pizzaPrice.traditional = action.payload;
    },
  },
});

export const { setPizzaThinCrustPrice, setPizzaTraditionalPrice } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
