import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DesktopCart from "../../globalComponents/cart/DesktopCart";
import MobileCart from "../../globalComponents/cart/MobileCart";
import Header from "../../globalComponents/header/Header";
import Sidebar from "../../globalComponents/sidebar/Sidebar";
import ProductDetails from "./ProductDetails";
import "./products.css";


function Products() {
  // const { id } = useParams();
  // console.log(id);
  const [open, setOpen] = useState(false);
  const [hideSidebar, setHidesidebar] = useState("hidden");
  

  return (
    <div>
      
      <div className=""></div>

      <div className="flex">
        <Sidebar hideSidebar={hideSidebar} />
        <ProductDetails />
      </div>
    </div>
  );
}

export default Products;
