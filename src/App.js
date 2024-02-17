import { Routes, Route } from "react-router-dom";
import AddRecipePage from "./components/recipe/AddRecipePage";

function App() {
  return (
    <Routes>
      <Route path="/add" element={<AddRecipePage />} />
    </Routes>
  );
}

export default App;
