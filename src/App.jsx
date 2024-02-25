import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";

import { HomePage } from "./pages/HomePage/HomePage";
// import Footer from './components/footer/footer'
import FavoritePage from "./pages/FavoritePage/Favorite.jsx";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage.jsx";
import Main from "./pages/Main";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";
import { HeaderPage } from "./pages/Header/Header.jsx";
import { AddRecipe } from "./pages/AddRecipe/AddRecipe.jsx";
import { RecipePage } from "./components/RecipePage/RecipePage.jsx";
import SearchBar from "./components/SearchPage/SearchBar/SearchBar.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HeaderPage />}>
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
        <Route path="shopping-list" element={<ShoppingListPage />} />
        <Route />
        <Route path="/main" element={<Main />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="recipe" element={<AddRecipe />} />
        <Route path="/searchpage" element={<SearchPage />} />
        {/* <Route path='/footer' element={<Footer/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
