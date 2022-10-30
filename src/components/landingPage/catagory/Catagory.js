import { React, useEffect, useState } from "react";
import "./catagory.css";
import axios from "axios";
import CatagoryCard from "./CatagoryCard";
import { Link } from "react-router-dom";


function Catagory() {
  const c = console.log.bind(console);

  let [catagory, setCatagory] = useState({});
  
  useEffect(() => {
   
    const apiUrl = process.env.REACT_APP_CHILD_CATAGORY_APP_URL;
    const endpoint = "products/get-child-catagory"

    console.log(apiUrl);
    axios
      .get("http://localhost:3000/api/products/get-child-catagory")
      .then((response) => {
        c(response.data);
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
          {Object.keys(catagory).map((item, i) => {
            return (
              <div class="catagory-card">
                <Link to={`products/${catagory[item].id}`}>
                  <CatagoryCard object={catagory[i]} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Catagory;
