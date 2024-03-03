import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesThunk } from "./operations";
import { addRecipeThunk } from "./operations";

const initialState = {
  categories: [],
  recipes: [],
  recipeData: {
    recipeImg: null,
    title: "",
    category: "",
    description: "",
    time: "",
    ingredients: [],
    instructions: "",
  },
  status: "idle",
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    updateField(state, action) {
      console.log("Updating field with", action.payload);
      const { name, value } = action.payload;
      if (!state.recipeData) {
        state.recipeData = {};
      }
      state.recipeData[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addRecipeThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addRecipeThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes.push(action.payload);
      })
      .addCase(addRecipeThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { updateField } = recipesSlice.actions;

export default recipesSlice.reducer;
