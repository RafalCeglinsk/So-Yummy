import { createSlice } from "@reduxjs/toolkit";
import { getRecipeId } from "./operations";

const initialState = {
  recipe: null,
  status: "idle",
  error: null,
};

const getRecipesSlice = createSlice({
  name: "getRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export const getRecipesRecuder = getRecipesSlice.reducer;
