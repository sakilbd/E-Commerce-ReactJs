import { React, useEffect, useState } from "react";
import "./catagory.css";
import axios from "axios";
import CatagoryCard from "./CatagoryCard";

function Catagory() {
  const c = console.log.bind(console);

  let [catagory, setCatagory] = useState({});

  useEffect(() => {
    axios
      .get("https://634d1ec9f5d2cc648e9cf4b1.mockapi.io/api/catagory/products")
      .then((response) => {
       c(response.data)
        setCatagory(response.data);

        // Code for handling the response
      })
      .catch((error) => {
        // Code for handling the error
      });
    return () => {};
  }, []);

  return (
    <div className="catagory-container">
      <div>
        <h3>Shop By Catagory</h3>
        <div className="catagory-div">
        {Object.keys(catagory).map((item,i) => {
          return <CatagoryCard object={catagory[i]} />
        })}
          
        </div>
        
      </div>
    </div>
  );
}

export default Catagory;
