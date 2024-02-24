import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const performSearch = createAsyncThunk(
  "search/performSearch",
  async ({ query, type }, thunkAPI) => {
    try {
      let response;
      if (type === "title") {
        response = await axios.get(`/recipes/search?title=${query}`);
      } else if (type === "ingredients") {
        response = await axios.get(`/recipes/search?ingredients=${query}`);
      }
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
