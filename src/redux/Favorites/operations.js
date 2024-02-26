import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
    "favorites/get",
    async (token, thunkAPI) => {
      try {
        const response = await axios.get("/favorites", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;
        console.log(data)
        const favorites = data.result;
        console.log(favorites)
        return favorites;
      } catch (error) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  