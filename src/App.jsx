import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/footer'

function App() {
  return (
    <Routes>
      <Route />
      <Route path='/footer' element={<Footer/>} />
    </Routes>
  );
}

export default App;
