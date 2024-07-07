import React from "react";

const Brand = () => {
  return (
    <div>
      <h5 className="productlist-filters-title">Brand</h5>
      <div className="brands-list">
        <div className="brands d-flex align-items-center gap-1">
          <input type="checkbox" id="gucci" />
          <label htmlFor="gucci">Gucci</label>
        </div>
      </div>
    </div>
  );
};

export default Brand;
