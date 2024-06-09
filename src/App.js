import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { Home } from "./pages/Home";
import Product_Details from "./pages/Product_Details";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product_Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
