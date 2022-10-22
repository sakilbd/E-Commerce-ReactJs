import React, { Component } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Products from "./components/productPage/catagorizedProduct/Products";

import "./AppStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="products/:id" element={<Products/>}></Route>
        </Routes>
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
