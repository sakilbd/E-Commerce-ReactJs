import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { GoThreeBars } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import "./header.css";
function Header({ setHidesidebar }) {
  let [btnStatus, setButtonStatus] = useState(true);

  const setValue = (value) => {
    setHidesidebar(value);
    console.log(value);
  };

  return (
    <div className="header-css w-screen bg-slate-400">
        
      <div className="lg:hidden">
        <button
          onClick={() => {
            setValue("block");
            setButtonStatus(false);
          }}
          className={"collapse-btn"+(btnStatus?" block":" hidden")}
        >
          <GoThreeBars />
        </button>
        <button
          onClick={() => {
            setValue("hidden");
            setButtonStatus(true)
          }}
          className={"collapse-btn"+ (btnStatus?" hidden":" block")}
        >
          <CgClose />
        </button>
      </div>
      <br></br>
    </div>
  );
}

export default Header;
