import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import Main from "./pages/Main";
// import Footer from './components/footer/footer'
import ShoppingListPage from './pages/ShoppingListPage/ShoppingListPage.jsx'
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* <Route path='/footer' element={<Footer/>} /> */}
      <Route path="/shopping-list" element={<ShoppingListPage/>}/>
      <Route />
      <Route index element={<HomePage />} />
      <Route path="/main" element={<Main/>}/>
    </Routes>
  );
}

export default App;
