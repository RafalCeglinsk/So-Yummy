import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import shoppingReducer from "../redux/shoppingList/shoppingListslice.js";
import recipesReducer from "./recipes/AddRecipe/addRecipeSlice.js";
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
import { searchReducer } from "./searchBar/searchBarSlice.js";
import { getRecipesRecuder } from "./recipes/GetRecipes/recipeSlice.js";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    recipes: recipesReducer,
    getRecipes: getRecipesRecuder,
    auth: persistReducer(authPersistConfig, authReducer),
    search: searchReducer,
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
