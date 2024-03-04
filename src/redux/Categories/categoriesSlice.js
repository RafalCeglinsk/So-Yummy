import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = [...payload.items];
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.items = [];
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
