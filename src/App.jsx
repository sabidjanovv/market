import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Products";
import Basket from "./components/Basket";
import { BasketProvider } from "./context/BasketContext";
import Modal from "./components/Modal";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [modalType, setModalType] = useState(null); 

  const toggleActions = () => {
    setModalType((prev) => (prev === "signIn" ? "signUp" : "signIn"));
  };

  return (
    <>
      <div className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => setModalType("signIn")}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign in
        </button>
        <button
          onClick={() => setModalType("signUp")}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Sign up
        </button>
      </div>

      {modalType === "signIn" && (
        <Modal close={() => setModalType(null)}>
          <SignIn toggle={toggleActions} />
        </Modal>
      )}

      {modalType === "signUp" && (
        <Modal close={() => setModalType(null)}>
          <SignUp toggle={toggleActions} />
        </Modal>
      )}

      <BasketProvider>
        <Router>
          <ToastContainer position="top-left" />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Router>
      </BasketProvider>
    </>
  );
}

export default App;
