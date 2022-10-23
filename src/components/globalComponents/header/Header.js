import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

function Header({ setHidesidebar }) {
  const setValue = (value) => {
    setHidesidebar(value);
    console.log(value);
  };

  return (
    <div>
      <button onClick={() => setValue("false")}>click to Hide</button>
      <br></br>
      <button onClick={() => setValue("true")}>click to unhide</button>
    </div>
  );
}

export default Header;
