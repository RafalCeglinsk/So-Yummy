import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deleteShoppingThunk, getShoppingThunk, addShoppingThunk } from "./thunkShopping.js";

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload || state.items;
        state.error = '';
      })
      .addCase(deleteShoppingThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((el) => el.indegredientId !== action.payload);
        state.error = '';
      })
      .addCase(addShoppingThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
        state.error = '';
      })
      .addMatcher(
        isAnyOf(
          getShoppingThunk.pending,
          deleteShoppingThunk.pending,
          addShoppingThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getShoppingThunk.rejected,
          deleteShoppingThunk.rejected,
          addShoppingThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { reducer: shoppingReducer } = shoppingSlice;
export default shoppingSlice.reducer;