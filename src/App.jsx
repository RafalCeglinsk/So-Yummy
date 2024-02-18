import { Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import {lazy} from "react"
const ShoppingListPage = lazy(() => import("./pages/ShoppingListPage/ShoppingListPage.jsx"))
=======
import { HomePage } from "./pages/HomePage/HomePage";
// import Footer from './components/footer/footer'
import ShoppingListPage from './pages/ShoppingListPage/ShoppingListPage.jsx'
>>>>>>> Stashed changes

function App() {
  return (
    <Routes>
      <Route path ="/shopping-list" element={
      <ShoppingListPage/>} />
      <Route />
<<<<<<< Updated upstream
=======
      <Route index element={<HomePage />} />
      {/* <Route path='/footer' element={<Footer/>} /> */}
      <Route path="/shopping-list" element={<ShoppingListPage/>}/>
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
