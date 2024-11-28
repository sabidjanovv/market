import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Products";
import Basket from "./components/Basket";
import { BasketProvider } from "./context/BasketContext";

function App() {
  return (
    <BasketProvider>
      <Router>
        <ToastContainer position="top-left"  />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </BasketProvider>
  );
}

export default App;
