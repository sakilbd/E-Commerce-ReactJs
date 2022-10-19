import React, { useState, useEffect } from "react";
import "./itemCard.css";
import StarRatings from "react-star-ratings";

function ItemCard(props) {
  // console.log(props.data)
  let [itemData, setItemData] = useState({});

  let [rating, setRating] = useState();
  let [count, setCount] = useState(0);
  const [showed, setShowed] = useState(true);
  // console.log("shit");
  function incrementCount() {
    count = count + 1;

    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    if (count == 0) {
      setShowed(true);
    }

    setCount(count);
  }

  useEffect(() => {
    setRating(parseFloat(props.data.rating));
    setItemData(props.data);
  }, [props.data]);

  return (
    <div className="item-card-container">
      <div className="image-container">
        <div className="badge">
          <span>-12%</span>
        </div>
        <img src="http://loremflickr.com/640/480/food"></img>
      </div>

      <div className="title-container" >
        <h6 className="title"> {itemData.title}</h6>
      </div>
      <div className="rating">
        <StarRatings
          starRatedColor="#d6d324"
          rating={rating}
          starDimension="20px"
          starSpacing="0px"
        />
        <div className="star-value">{rating}</div>
      </div>
      <div className="weight">
        {" "}
        {itemData.quantity}
        <span>{itemData.unit}</span>
      </div>
      <div className="price-portion">
        <div>
          ৳ <span className="price">{itemData.price}</span>
        </div>
        <div className="previous-price">
          ৳ <span className="price">{itemData.last_price}</span>
        </div>
      </div>
      <button
        onClick={(e) => {
          setShowed(false);
          setCount(1);
        }}
        style={showed ? { display: "block" } : { display: "none" }}
        className="add-button"
      >
        Add to bag
      </button>
      <div
        style={showed ? { display: "none" } : { display: "block" }}
        className="increment-button-container"
      >
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
