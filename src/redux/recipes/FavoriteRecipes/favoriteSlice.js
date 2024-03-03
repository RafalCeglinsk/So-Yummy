import { createSlice } from "@reduxjs/toolkit";
import { toggleFavorite } from "../operations";

const initialState = {
  isFavorite: false,
  status: "idle",
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleFavorite.pending, (state) => {
        state.status = "loading";
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.favorites.findIndex(
          (favorite) => favorite.id === action.payload.id
        );
        if (index >= 0) {
          state.favorites.splice(index, 1);
        } else {
          state.favorites.push(action.payload);
        }
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;
