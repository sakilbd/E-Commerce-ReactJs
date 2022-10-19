import React, { useState, useEffect } from "react";
import "./itemCard.css";
import StarRatings from "react-star-ratings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ItemCard(props) {
  // console.log(props.data)
  let [itemData, setItemData] = useState({});
  let [loading, setLoading] = useState(true);
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
    <div>
      <div
        style={loading ? { display: "none" } : { display: "block" }}
        className="item-card-container"
      >
        <div className="image-container">
          <div className="badge">
            <span>-12%</span>
          </div>
          <img
            onLoad={() => setLoading(false)}
            src="http://loremflickr.com/640/480/food"
          ></img>

          {/* <LazyLoadImage
            alt={"FUCKSHIT"}
            height={100}
            effect="blur"
            src={"http://loremflickr.com/640/480/food"} // use normal <img> attributes as props
            width={150}
          /> */}
        </div>

        <div className="title-container">
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
      
    </div>
  );
}

export default ItemCard;
