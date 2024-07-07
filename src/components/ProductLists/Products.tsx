import React from "react";
import Product from "./Product";
import Review from "./Review";
import Pagination from "./Pagination";
import Grid from "../../Icons/visualization.png";
import List from "../../Icons/list.png";
const Products = () => {
  return (
    <div className="row">
      <div className="col-6">
        <span className="founded-items-number">
          130 items found for "Base Layers"
        </span>
      </div>
      <div className="col-6 d-flex gap-3">
        <div className="d-flex gap-1 align-items-center">
          <span className="sort-by-view">Sort By:</span>
          <select className="sort-by-filter-options">
            <option value="">Best Match</option>
          </select>
        </div>
        <div className="d-flex gap-1 align-items-center">
          <span>View:</span>
          <img
            src={Grid}
            alt="Grid"
            className="product-view-order"
            style={{ margin: "0px 6px" }}
          />
          <img src={List} alt="List" className="product-view-order" />
        </div>
      </div>
      <div className="col-12">
        <button className="products-size-filter-btn">
          Showing 7.7 Products Only
        </button>
      </div>
      <div className="col-12 border-1"></div>
      <div className="col-3">
        <Product />
      </div>
      <div className="col-3">
        <Product />
      </div>
      <div className="col-3">
        <Product />
      </div>
      <div className="col-3">
        <Product />
      </div>
      <div className="col-6">
        <Review />
      </div>
      <div className="col-6 justify-content-end d-flex">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
