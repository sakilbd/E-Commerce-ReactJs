import React from "react";
import { useState, useEffect } from "react";
import "./catagory.css";

function CatagoryCard(props) {
  let [catagoryName, setCatagoryName] = useState({
    name: "something",
    image: "",
  });
  let [catPhoto, setCatPhoto] = useState();
  useEffect(() => {
    setCatagoryName({ name: props.object.name, image: props.object.image });
    // setCatPhoto(props.object.image);
  }, [props.object]);

  return (
    <div class="catagory-content">
     
        <img src={catagoryName.image} alt=""></img>
        {catagoryName.name}
      
    </div>
  );
}

export default CatagoryCard;
