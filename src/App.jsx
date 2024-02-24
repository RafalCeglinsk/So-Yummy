import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
import Footer from './components/footer/footer'
>>>>>>> Stashed changes
import Favorite from "./pages/FavoritePage/Favorite.jsx";
>>>>>>> Stashed changes
import Main from "./pages/Main";
// import Footer from './components/footer/footer'
import ShoppingListPage from './pages/ShoppingListPage/ShoppingListPage.jsx'
function App() {
  return (
    <Routes>
<<<<<<< Updated upstream
      <Route index element={<HomePage />} />
      {/* <Route path='/footer' element={<Footer/>} /> */}
      <Route path="/shopping-list" element={<ShoppingListPage/>}/>
      <Route />
      <Route index element={<HomePage />} />
      <Route path="/main" element={<Main/>}/>
=======
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
        <Route path='/footer' element={<Footer/>} />
      </Route>
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
