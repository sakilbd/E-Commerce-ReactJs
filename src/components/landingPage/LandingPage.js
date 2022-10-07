import React from "react";
import HeaderComp from "./header/HeaderComp";
import CoverPhoto from "./coverphoto/CoverPhoto";
import Catagory from "./catagory/Catagory";
import './landingPage.css'
function LandingPage() {
  return (
    <div>
      <HeaderComp />
      <div className="component" style={{ "padding-top": "1%" }}>
        <CoverPhoto/>
      </div>
      <div className="component" style={{ "padding-top": "1%" }}>
        <Catagory/>
      </div>
    </div>
  );
}

export default LandingPage;
