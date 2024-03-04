import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/categories");
      const categories = response.data.categories;
      console.log(categories);
      return categories;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);
