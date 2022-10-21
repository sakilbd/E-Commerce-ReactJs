import React from "react";
import HeaderComp from "./header/HeaderComp";
import CoverPhoto from "./coverphoto/CoverPhoto";
import Catagory from "./catagory/Catagory";
import "./landingPage.css";
import Banner from "./Banner";
import TrendingProducts from "./trendingProducts/TrendingProducts";
function LandingPage() {
  return (
    <div className="page-container flex flex-col justify-center items-center   ">
      <div className="lg:w-5/6 md:w-full  ">
        <HeaderComp />
        <div className="component  " style={{ "padding-top": "1%" }}>
          <CoverPhoto />
        </div>
        {/* <div className="component" style={{ "padding-top": "1%" }}>
          <Catagory />
        </div> */}
        <div className="component" style={{ "padding-top": "1%" }}>
          <Banner />
        </div>
        <div className="component" style={{ "padding-top": "1%" }}>
          <TrendingProducts />
        </div>

        
      </div>
    </div>
  );
}

export default LandingPage;
