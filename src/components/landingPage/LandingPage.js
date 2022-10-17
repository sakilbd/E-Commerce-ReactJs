import React from "react";
import HeaderComp from "./header/HeaderComp";
import CoverPhoto from "./coverphoto/CoverPhoto";
import Catagory from "./catagory/Catagory";
import './landingPage.css'
import Banner from "./Banner";
function LandingPage() {
  return (
    <div>
      {/* <HeaderComp />
      <div className="component" style={{ "padding-top": "1%" }}>
        <CoverPhoto/>
      </div> */}
      <div className="component" style={{ "padding-top": "1%" }}>
        <Catagory/>
      </div>
      {/* <div className="component" style={{ "padding-top": "1%" }}>
        <Banner/>
      </div> */}
    </div>
  );
}

export default LandingPage;
