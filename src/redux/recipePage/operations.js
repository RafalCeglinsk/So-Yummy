import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getRecipeId = createAsyncThunk(
  "recipes/getRecipeId",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/recipes/`);
      const data = response.data;
      const recipe = data.recipe;
      return recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.post(`/api/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
