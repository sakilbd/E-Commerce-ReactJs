import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

function Header({ setHidesidebar }) {
  const setValue = (value) => {
    setHidesidebar(value);
    console.log(value);
  };

  return (
    <div>
      <button onClick={() => setValue("hidden")}>click to Hide</button>
      <br></br>
      <button onClick={() => setValue("block")}>click to unhide</button>
    </div>
  );
}

export default Header;
