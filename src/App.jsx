import { Routes, Route } from "react-router-dom";
import {lazy} from "react"
const ShoppingListPage = lazy(() => import("./pages/ShoppingListPage/ShoppingListPage.jsx"))

function App() {
  return (
    <Routes>
      <Route path ="/shopping-list" element={
      <ShoppingListPage/>} />
      <Route />
    </Routes>
  );
}

export default App;
