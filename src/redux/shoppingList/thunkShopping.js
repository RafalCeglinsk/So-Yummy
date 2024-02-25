import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const deleteShoppingThunk = createAsyncThunk(
  "shopping/delete",
  async (id) => {
    try {
      await axios.delete(`/shopping-lists/${id}`);
      return id;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const getShoppingThunk = createAsyncThunk("shopping/get", async () => {
  try {
    const { data } = await axios.get("/shopping-lists");
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const addShoppingThunk = createAsyncThunk(
  "addShopping/post",
  async (credentials) => {
    try {
      const result = await axios.post("/shopping-lists", credentials);
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
