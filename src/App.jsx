// import { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./Pages/CardPage";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import CartPage from "./Pages/CartPage";
import PageDescription from "./Pages/PageDescription";
import { useLocation } from "react-router-dom";
import { data } from "./assets/data";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<CardPage product={data} />} />
        <Route
          path="/explore/:id"
          element={<PageDescription productData={data} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
