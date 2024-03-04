import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRecipes = createAsyncThunk(
  "recipes/getAllRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes");
      const recipes = response.data;
      console.log(recipes);
      return recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
