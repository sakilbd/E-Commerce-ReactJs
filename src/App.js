import React, { Component, useContext } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Products from "./components/productPage/catagorizedProduct/Products";

import "./AppStyle.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import DesktopCart from "./components/globalComponents/cart/DesktopCart";
import Header from "./components/globalComponents/header/Header";
import Sidebar from "./components/globalComponents/sidebar/Sidebar";
import { CartContext } from "./components/globalComponents/contexts/cartContext/CartContext";
export const CountContext = React.createContext();
function App() {
  const msg = useContext(CartContext);
  return (
    <>
      {/* <Router> */}
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          {/* <Route path="products/:id" element={<Products />}/> */}

          <Route path="/" element={<Header />}>
            <Route index element={<LandingPage />} />
            {/* <Route index element={<h3>Index </h3>} /> */}
            <Route path="products/:id" element={<Products />} />
            {/* </CountContext.Provider> */}
          </Route>

          {/* <Route  path="products/:id" element={<Products />}/> */}
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
