import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const getCategoriesThunk = createAsyncThunk(
  "recipes/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/recipes/categories");
      return response.data.categories.map((category) => ({
        value: category,
        label: category,
      }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk do dodawania nowego przepisu
export const addRecipeThunk = createAsyncThunk(
  "recipes/addRecipe",
  async (recipeData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/recipes", recipeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

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
      console.log("Before update:", current(state.recipeData));
      const { name, value } = action.payload;
      if (!state.recipeData) {
        state.recipeData = {};
      }
      state.recipeData[name] = value;
      console.log("After update:", current(state.recipeData));
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
