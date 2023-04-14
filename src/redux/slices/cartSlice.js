import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};
/* const refactorFindItem = (state, payload) => {
  return state.items.find(
    (obj) =>
      obj.id === payload.id &&
      obj.type === payload.type &&
      obj.size === payload.size
  );
}; */
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });
      findItem
        ? findItem.count++
        : state.items.push({
            ...payload,
            count: 1,
          });
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });

      findItem && findItem.count--;
      if (findItem.count > 0) {
        if (findItem) {
          findItem.count--;
        }
      } else {
        findItem.count = 0;
      }
      if (state.totalPrice > 0) {
        state.totalPrice -= findItem.price;
      } else if (state.totalPrice <= 0) {
        state.totalPrice = 0;
      }
      /*       state.totalPrice -= findItem.price; */
    },

    removeItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });
      state.totalPrice -= findItem.price * findItem.count;
      state.items = state.items.filter((obj) => {
        return (
          obj.id !== payload.id ||
          obj.size !== payload.size ||
          obj.type !== payload.type
        );
      });
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { removeItem, clearItem, addItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
