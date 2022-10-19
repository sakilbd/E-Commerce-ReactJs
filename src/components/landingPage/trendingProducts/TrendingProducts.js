import React, { useEffect, useState } from "react";
import ItemCard from "../../globalComponents/ItemCard";
import axios from "axios";
import "./trending_products.css";

function TrendingProducts() {
  let [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("/fakeData/products.json")
  //     .then((r) => r.text())
  //     .then((data) => {
  //       console.log(text);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("/fakeData/products.json")
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
    return () => {};
  }, []);

  return (
    <div className="trending-container">
      Trending Products
      <div className="card-container">
        {Object.keys(data).map((item, i) => {
          return (
            <div className="product-card">
              <ItemCard data={data[item]}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrendingProducts;
