import { createSlice } from "@reduxjs/toolkit";
import { performSearch } from "./operations";

const initialState = {
  searchResults: [],
  searchQuery: "",
  status: "idle",
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(performSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
