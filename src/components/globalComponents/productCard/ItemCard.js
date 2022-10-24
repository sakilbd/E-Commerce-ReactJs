import React, { useState, useEffect } from "react";
import "./itemCard.css";
import StarRatings from "react-star-ratings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useCartContext } from "../contexts/cartContext/CartContext";

function ItemCard(props) {
  // console.log(props.data)
  let [itemData, setItemData] = useState({});
  let [loading, setLoading] = useState(true);
  let [rating, setRating] = useState();
  let [count, setCount] = useState(0);
  const [showed, setShowed] = useState(true);
  const getItem =useCartContext();
//  const [data,setdata] = useCartContext();
  // console.log("shit");
  function incrementCount() {
    count = count + 1;
    // setdata(count);
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
    
      <div
        style={loading ? { display: "none" } : { display: "block" }}
        className="item-card-container"
      >
        {getItem}
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

        <div className="max-h-[50px] min-h-[50px] sml:max-h-[40px] sml:min-h-[40px]  overflow-scroll">
          <h6  className="mt-1 sml:text-sm "> {itemData.title}</h6>
        </div>
        <div className="rating">
          <StarRatings
            starRatedColor="#d6d324"
            rating={rating}
            starDimension="20px"
            starSpacing="0px"
           
          />
          <div className="star-value sml:text-sm">{rating}</div>
        </div>
        <div className="weight sml:text-sm">
          {" "}
          {itemData.quantity}
          <span>{itemData.unit}</span>
        </div>
        <div className="price-portion sml:text-sm">
          <div>
            ৳ <span className="price ">{itemData.price}</span>
          </div>
          <div className="previous-price ">
            ৳ <span className="price">{itemData.last_price}</span>
          </div>
        </div>
        <button
          onClick={(e) => {
            setShowed(false);
            setCount(1);
          }}
          style={showed ? { display: "block" } : { display: "none" }}
          className="add-button sml:text-sm"
        >
          Add to bag
        </button>
        <div
          style={showed ? { display: "none" } : { display: "block" }}
          className="increment-button-container"
        >
          <button className="increment-button ">
            <button className="count-buttons sml:text-sm" onClick={decrementCount}>
              -
            </button>
            <div className="sml:text-sm">{count}</div>
            <button className="count-buttons sml:text-sm" onClick={incrementCount}>
              +
            </button>
          </button>
        </div>
        
      </div>
      
    
  );
}

export default ItemCard;
