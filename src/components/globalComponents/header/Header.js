import React, { useState, useContext } from "react";

import { GoThreeBars } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import "./header.css";
import { Outlet } from "react-router-dom";
import { CartContext } from "../contexts/cartContext/CartContext";
import CartButton from "./cartButton/CartButton";
import Sidebar from "./sidebar/Sidebar";
function Header({ setHidesidebar }) {
  // const cartInfo = useContext(CartContext);
  let [btnStatus, setButtonStatus] = useState(true);
  const bullshit = useContext(CartContext);
  const setValue = (value) => {
    setHidesidebar(value);
    console.log(value);
  };

  return (
    <>
      <div className="header-css w-screen sticky bg-slate-400">
        {/* {bullshit} */}
        {/* <div className="lg:hidden"> */}
        <div className="">

          <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
            onClick={() => {
              setValue("block");
              setButtonStatus(false);
            }}
            className={"collapse-btn" + (btnStatus ? " block" : " hidden")}
          >
            <GoThreeBars />
          </button>
          <button
            onClick={() => {
              setValue("hidden");
              setButtonStatus(true);
            }}
            className={"collapse-btn" + (btnStatus ? " hidden" : " block")}
          >
            <CgClose />
          </button>
        </div>
        <Sidebar/>
        <div className="absolute right-5 w-16">
          <CartButton />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
