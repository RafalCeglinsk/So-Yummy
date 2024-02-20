import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";

// import Footer from './components/footer/footer'

function App() {
  return (
    <Routes>
      <Route />
      <Route index element={<HomePage />} />

      {/* <Route path='/footer' element={<Footer/>} /> */}
    </Routes>
  );
}

export default App;
