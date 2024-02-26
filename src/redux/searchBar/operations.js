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
        response = await axios.get(`/ingredients?ingredients=${query}`);
    console.log(response)
      }
      const data = response.data;
      const result = data.result;
      console.log("operations.js,results",result);
      console.log(type);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
