import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import Favorite from "./pages/FavoritePage/Favorite.jsx";
import { AddRecipe } from "./pages/AddRecipe/AddRecipe.jsx";

import Main from "./pages/Main";
// import Footer from './components/footer/footer'
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage.jsx";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/add" element={<AddRecipe></AddRecipe>} />
      <Route path="/shopping-list" element={<ShoppingListPage />} />
      <Route />
      <Route index element={<HomePage />} />
      <Route path="/main" element={<Main />} />
      <Route path="/favorite" element={<Favorite />} />
      {/* <Route path='/footer' element={<Footer/>} /> */}
    </Routes>
  );
}

export default App;
