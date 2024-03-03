import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteShoppingThunk,
  getShoppingThunk,
  addShoppingThunk,
} from "./operations.js";

const handleFulfilledAdd = (state, { payload }) => {
  if (payload) {
    state.shopping.isLoading = false;
    state.shopping.items = [...payload];
    state.shopping.error = "";
  }
};
const handlePending = (state) => {
  state.shopping.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.shopping.isLoading = false;
  state.shopping.error = payload;
};

const handleFulfilledDel = (state, { payload }) => {
  state.shopping.isLoading = false;
  state.shopping.items = state.shopping.items.filter(
    (el) => el.indegredientId !== payload
  );
  state.shopping.error = "";
};

const handleFulfilledGet = (state, { payload }) => {
  state.shopping.isLoading = false;
  state.shopping.items = payload || state.shopping.items;
  state.shopping.error = "";
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    shopping: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingThunk.fulfilled, handleFulfilledGet)
      .addCase(deleteShoppingThunk.fulfilled, handleFulfilledDel)
      .addCase(addShoppingThunk.fulfilled, handleFulfilledAdd)

      .addMatcher(
        isAnyOf(
          getShoppingThunk.pending,
          deleteShoppingThunk.pending,
          addShoppingThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getShoppingThunk.rejected,
          deleteShoppingThunk.rejected,
          addShoppingThunk.rejected
        ),
        handleRejected
      );
  },
});

export default shoppingSlice.reducer;
