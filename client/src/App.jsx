import "./App.css";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage"
import ViewProductPage from "./pages/ViewProductPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/product/view/:productId" element={<ViewProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
