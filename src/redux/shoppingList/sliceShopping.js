import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteShoppingThunk,
  getShoppingThunk,
  addShoppingThunk,
} from "./thunkShopping.js";

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
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

const handleFulfilledAdd = (state, { payload }) => {
  if (payload) {
    state.isLoading = false;
    state.items.push(payload);
    state.error = "";
  }
};
const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter((el) => el.indegredientId !== payload);
  state.error = "";
};

const handleFulfilledGet = (state, { payload }) => {
  console.log("payload", payload);
  state.isLoading = false;
  if (payload) {
    state.items = payload;
    console.log("state.shopping.items", state.items);
  }
  state.error = "";
};

export default shoppingSlice.reducer;
