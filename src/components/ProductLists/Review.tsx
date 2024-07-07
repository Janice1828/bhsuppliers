import React from "react";

const Review = () => {
  return (
    <div className="d-flex gap-3 align-items-center">
      <p className="review-content mb-0">
        Did you find what you were looking for?
      </p>
      <div className="d-flex gap-2 align-items-center review-btns">
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default Review;
