import React, { useState, useContext, useEffect } from "react";

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
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    document.querySelector("#header-button").onclick = function () {
      sidebar.classList.toggle("sidebar_small");
      mainContent.classList.toggle("main-content_large");
    };
  }, []);

  return (
    <>
      <div className="grid-container">
        <nav className="sidebar md:w-screen">
          {/* <button className="header-button">M</button> */}
         
        </nav>
        <div className="main-content md:w-0">
          <header className="header-css sticky bg-slate-400">
            <div className="">
              <button id="header-button">
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
           
            <div className="absolute right-5 w-16">
              <CartButton />
            </div>
          </header>
          <main className="">
            <Outlet />
          </main>
        </div>
        
      </div>
    </>
  );
}

export default Header;
