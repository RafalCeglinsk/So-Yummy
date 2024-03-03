import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async (credentials, thunkAPI) => {
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
      const response = await axios.delete(`/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getMyRecipes = createAsyncThunk(
  "recipes/getMyRecipes",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get("/ownRecipes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/delete",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/ownRecipes/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
