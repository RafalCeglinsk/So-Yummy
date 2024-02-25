import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getRecipeId = createAsyncThunk(
  "recipes/getRecipeId",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/${id}`);
      console.log("response", response);
      const data = response.data;
      console.log("data", data);
      const recipe = data.recipe;
      console.log("recipe", recipe);
      return recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post(`/favorites/`, credentials);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/remove",
  async (recipeId, thunkAPI) => {
    try {
      console.log(recipeId);
      const response = await axios.delete(`/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
