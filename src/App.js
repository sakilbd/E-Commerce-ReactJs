import React, { Component } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Products from "./components/productPage/catagorizedProduct/Products";

import "./AppStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopCart from "./components/globalComponents/cart/DesktopCart";
import Header from "./components/globalComponents/header/Header";
import Sidebar from "./components/globalComponents/sidebar/Sidebar";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="products/:id" element={<Products />}/> */}
          <Route path="products" element={<Header />}>
            {/* <Route index element={<h3>Index </h3>} /> */}
            <Route path=":id" element={<Products/>} />
          </Route>
          {/* <Route  path="products/:id" element={<Products />}/> */}
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
      
    </>
  );
}

export default App;
