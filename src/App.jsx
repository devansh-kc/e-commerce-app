// import { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./Pages/CardPage";
import { Login } from "./Components/Navbar/Login";
import { SignUp } from "./Components/Navbar/SignUp";
import CartPage from "./Pages/CartPage";
import PageDescription from "./Pages/PageDescription";
import { data } from "./assets/data";
function App() {
  return (
    <div className="h-full overflow-y-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<CardPage product={data} />} />
          <Route
            path="/explore/:id"
            element={<PageDescription productData={data} />}
          />
          {/* 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
