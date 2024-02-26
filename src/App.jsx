import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";
// import  Footer  from "./components/footer/footer.jsx";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage";
import { HeaderPage } from "./pages/Header/Header.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import { AddRecipe } from "./pages/AddRecipe/AddRecipe.jsx";
import FavoritePage from "./pages/FavoritePage/Favorite.jsx";
import { RecipePage } from "./components/RecipePage/RecipePage.jsx";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";
import { CategoryPage } from "./pages/CategoryPage/CategoryPage.jsx";
import { MyRecipePage } from "./components/MyRecipies/MyRecipePage.jsx";
import Error404 from "./components/404/error_404.jsx";

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
        <Route path="/main" element={<Main />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />}>
        <Route path="/myrecipes" element={<MyRecipePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
        <Route path="/error_404" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
