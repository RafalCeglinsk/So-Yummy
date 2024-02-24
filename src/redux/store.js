import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import shoppingReducer from "./shoppingList/sliceShopping.js";
import recipesReducer from "./AddRecipe/sliceAddRecipe.js";
import { authReducer } from "./auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    recipes: recipesReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "recipes/updateField",
        ],
        ignoredPaths: ["recipes.recipeData.recipeImg"],
      },
    }),
});

export const persistor = persistStore(store);
