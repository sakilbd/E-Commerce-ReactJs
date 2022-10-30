import React, { useEffect, useState } from "react";

import axios from "axios";
// import "./trending_products.css";
import ItemCard from "../../globalComponents/productCard/ItemCard";

function ProductDetails() {
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("/fakeData/products.json")
  //     .then((r) => r.text())
  //     .then((data) => {
  //       console.log(text);
  //     });
  // }, []);

  useEffect(() => {
    axios
      // .get("/fakeData/products.json")
      .get("")
      .then((response) => {
        // console.log(response.data);
        // setCatagory(response.data);
        console.log(response.data);
        setData(response.data);
        // Code for handling the response
      })
      .catch((error) => {
        // Code for handling the error
      });
  
  }, []);

  return (
    <div className="overflow-scroll h-screen  p-2">
      <div
        style={loading ? { display: "none" } : { display: "block" }}
        className=""
      >
       
        <div onLoad={() => setLoading(false)} className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 sml:grid-cols-2 gap-2">
          {Object.keys(data).map((item, i) => {
            return (
             
                <ItemCard data={data[item]} />
                
              
            );
          })}
        </div>
      </div>
      <div
        style={loading ? { display: "block" } : { display: "none" }}
        className="loading-container"
      >
        <div className="loading-flex-container">
          {[...Array(6)].map((item) => {
            return (
              <div className="loading-card">
                <div className="loading-iamge"></div>
                <div className="loading-title"></div>
                <div className="loading-title-2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
