import React, { Component } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Products from "./components/productPage/catagorizedProduct/Products";

import "./AppStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopCart from "./components/globalComponents/cart/DesktopCart";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          {/* <Route path="products/:id" element={<Products />}/> */}
          {/* <Route path="products" element={<DesktopCart/>}>
            
              <Route path=":id" element={<Products/>}/>
          </Route> */}
          <Route  path="products/:id" element={<Products />}/>
          <Route path="*" element={<h1>Route does not 
            exist</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
