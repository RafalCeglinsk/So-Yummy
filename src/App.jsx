import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";

import { HomePage } from "./pages/HomePage/HomePage";

import { HomePage } from "./pages/HomePage/HomePage";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { Main } from "./pages/Main";
import { AddRecipe } from "./pages/AddRecipe/AddRecipe.jsx";
import Favorite from "./pages/FavoritePage/Favorite.jsx";
import MyRecipesPage from "./pages/MyRecipies/MyRecipesPage.jsx";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/auth/register"
        element={
          <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
        }
      />
      <Route
        path="/auth/login"
        element={
          <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
        }
      />
      <Route path="/main" element={<Main />} />
      {/* <Route>CATEGORIES</Route> */}
      <Route path="/add" element={<AddRecipe></AddRecipe>} />
      <Route path="/favorite" element={<Favorite />} />
      {/* <Route>RECIPE</Route> */}
      <Route path="/my-recipie" element={<MyRecipesPage />} />
      {/* <Route>SEARCH</Route> */}
      <Route path="/shopping-list" element={<ShoppingListPage />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;