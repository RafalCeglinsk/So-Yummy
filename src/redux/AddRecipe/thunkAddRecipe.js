import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRecipeThunk = createAsyncThunk(
  "recipes/add",
  async (recipeData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/recipes", recipeData);
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
      const response = await axios.get("/api/recipes/categories");
      // Przetwarzanie odpowiedzi do formatu oczekiwanego przez komponent Select
      return response.data.categories.map((categoryName) => ({
        value: categoryName,
        label: categoryName,
      }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
