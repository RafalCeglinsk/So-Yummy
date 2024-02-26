import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const addRecipeThunk = createAsyncThunk(
  "recipes/add",
  async (recipeData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/recipes", recipeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  "categories/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/recipes/categories");
      return response.data.categories.map((categoryName) => ({
        value: categoryName,
        label: categoryName,
      }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
