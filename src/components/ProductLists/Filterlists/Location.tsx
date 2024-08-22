import React from "react";

const Location = () => {
  return (
    <div>
      <h5 className="productlist-filters-title">Location</h5>
      <div className="countries-list">
        <div className="d-flex align-items-center gap-1">
          {/* <input type="checkbox" id="nepal" /> */}
          <label className="filterproducts-country-name" htmlFor="nepal">
            Nepal
          </label>
        </div>
      </div>
    </div>
  );
};

export default Location;
