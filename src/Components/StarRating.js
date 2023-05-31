import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            {ratingValue <= rating ? (
              <FaStar color={"#ffc107"} size={10} style={{ marginRight: 4 }} />
            ) : (
              <FaRegStar
                color={"#ffc107"}
                size={10}
                style={{ marginRight: 4 }}
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
