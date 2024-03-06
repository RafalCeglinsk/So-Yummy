import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/categories");
      const categories = response.data.categories;
      return { items: categories };
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);

export const getCategory = createAsyncThunk(
  "categories/getCategory",
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/categories/${category}`);
      const data = response.data;
      const recipes = data.recipes.recipes;
      return recipes;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);
