import React from "react";
import './rating.css'

const StarRating = ({ rating,total }) => {
  const getStarIcon = (index) => {
    if (rating >= index + 1) {
      return <i className="uis uis-star"></i>; // full star
    } else if (rating >= index + 0.5) {
      return <i className="uis uis-star-half-alt"></i>; // half star (custom symbol)
    } else {
      return <i className="uil uil-star"></i>; // empty star
    }
  };

  return (
    <div className="rating">
      {[0, 1, 2, 3, 4].map((i,index) => (
        <div key={index}>{getStarIcon(i)} </div> 
      ))}
      {total && <span> ({total})</span>}
    </div>
  );
};

export default StarRating;
