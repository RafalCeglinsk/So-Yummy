import { createSlice } from "@reduxjs/toolkit";
import { toggleFavorite, getRecipeId } from "./operations";

const initialState = {
  favorites: [],
  recipe: null,
  status: "idle",
  error: null,
};

const recipeSlice = createSlice({
  name: "recipes",
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
      })
      .addCase(getRecipeId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecipeId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipe = action.payload;
      })
      .addCase(getRecipeId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const recipeReducer = recipeSlice.reducer;
