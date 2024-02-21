import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";

import { HomePage } from "./pages/HomePage/HomePage";
// import Footer from './components/footer/footer'
import Favorite from "./pages/FavoritePage/Favorite.jsx";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage.jsx";
import Main from "./pages/Main";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";

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
      <Route path="/shopping-list" element={<ShoppingListPage />} />
      <Route />
      <Route path="/main" element={<Main />} />
      <Route path="/favorite" element={<Favorite />} />
      {/* <Route path='/footer' element={<Footer/>} /> */}
    </Routes>
  );
}

export default App;
