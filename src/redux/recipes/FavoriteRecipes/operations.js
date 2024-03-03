import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/favorites/${credentials}`);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/remove",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
