import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// export const getFavorites = createAsyncThunk(
//     "favorites/",
//     async ( thunkAPI) => {
//       try {
//         const response = await axios.get(`/favotites/`);
//         console.log("response", response);
//         // const data = response.data;
//         // console.log("data", data);
//         // const recipe = data.recipe;
//         // console.log("recipe", recipe);
//         // return recipe;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );
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
  