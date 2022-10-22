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
      <div className="2xl:w-8/12 lg:w-11/12 md:max-w-[95%] sm:max-w-[97%] sml:max-w-[97%]  ">
        <HeaderComp />
        <div className="component  " style={{ "padding-top": "1%" }}>
          <CoverPhoto />
        </div>
        {/* <div className="component" style={{ "padding-top": "1%" }}>
          <Catagory />
        </div> */}
        {/* <div className="component" style={{ "padding-top": "1%" }}>
          <Banner />
        </div> */}
        <div className="component" style={{ "padding-top": "1%" }}>
          <TrendingProducts />
        </div>

        
      </div>
    </div>
  );
}

export default LandingPage;
