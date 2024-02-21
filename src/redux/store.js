import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import shoppingReducer from "./shoppingList/sliceShopping.js";
import recipesReducer from "./AddRecipe/sliceAddRecipe.js";

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
