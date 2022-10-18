import React, { useState } from "react";
import "./itemCard.css";
import StarRatings from "react-star-ratings";

function ItemCard() {
  let [count, setCount] = useState(0);
  const [showed, setShowed] = useState(true);
  console.log("shit");
  function incrementCount() {
    count = count + 1;
   
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    if(count==0){
      setShowed(true)
    }

    setCount(count);
  }
  return (
    <div className="item-card-container">
      <div>badge</div>
      <div className="image-container">
        <img src="http://loremflickr.com/640/480/food"></img>
      </div>

      <div>Page Title</div>
      <div className="rating">
        <StarRatings
          starRatedColor="#d6d324"
          rating={4.5}
          starDimension="20px"
          starSpacing="0px"
        />
        <div className="star-value">4.5</div>
      </div>
      <div className="weight">
        {" "}
        100 <span>g</span>
      </div>
      <div>
        {" "}
        ৳ <span className="price">100</span>
      </div>
      <button
        onClick={(e) => {setShowed(false);
          setCount(1) 
        }}
        style={showed ? { display: "block" } : { display: "none" }}
        className="add-button"
      >
        Add to bag
      </button>
      <div style={showed ? { display: "none" } : { display: "block" }} className="increment-button-container">
        <button className="increment-button ">
          <button className="count-buttons" onClick={decrementCount}>
            -
          </button>
          <div>{count}</div>
          <button className="count-buttons" onClick={incrementCount}>
            +
          </button>
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
