import React from "react";
import "./itemCard.css";
import StarRatings from "react-star-ratings";

function ItemCard() {
  return (
    <div className="item-card-container">
      <div>
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
        <div>Price</div>
        <div>Add</div>
      </div>
    </div>
  );
}

export default ItemCard;
