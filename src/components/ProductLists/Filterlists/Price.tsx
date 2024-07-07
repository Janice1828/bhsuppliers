import React from "react";

const Price = () => {
  return (
    <div>
      <h5 className="productlist-filters-title">Price</h5>
      <form action="#" className="d-flex align-items-center gap-2">
        <input type="number" placeholder="Min" className="price-inputs" />
        <span className="price-filter-border">-</span>
        <input type="number" placeholder="Max" className="price-inputs" />
        <button className="price-filter-btn">Apply</button>
      </form>
    </div>
  );
};

export default Price;
