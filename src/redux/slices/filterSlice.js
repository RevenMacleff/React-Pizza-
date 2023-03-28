import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0 /* value может называться как угодно */,
  sort: { name: "популярности", sort: "rating" },
  currentPage: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
