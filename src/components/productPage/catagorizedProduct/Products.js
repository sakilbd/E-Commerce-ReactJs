import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DesktopCart from "../../globalComponents/cart/DesktopCart";
import Header from "../../globalComponents/header/Header";
import Sidebar from "../../globalComponents/sidebar/Sidebar";
import ProductDetails from "./ProductDetails";
import './products.css';

function Products() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [hideSidebar, setHidesidebar] = useState("hidden");

  return (
    <div>
      <div className="">
        <Header setHidesidebar={setHidesidebar} />
      </div>
      {/* {hideSidebar} */}
      <div className="desktop-cart flex content-end fixed z-10 h-screen items-center   right-px ">
        <DesktopCart />
      </div>
      <div className="flex">
        {/* { hideSidebar?'':<Sidebar />} */}
        <Sidebar hideSidebar={hideSidebar} />

        <div className="">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default Products;
