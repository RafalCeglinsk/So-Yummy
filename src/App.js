import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/footer'

function App() {
  return (
    <Routes>
      <Route path ='/footer' element={<Footer/>} />
      <Route />
    </Routes>
  );
}

export default App;
