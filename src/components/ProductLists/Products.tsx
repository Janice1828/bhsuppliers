import React from "react";
import Product from "./Product";
import Review from "./Review";
import Pagination from "./Pagination";

const Products = () => {
  return (
    <div className="row">
      <div className="col-6">
        <span>130 items found for "Base Layers"</span>
      </div>
      <div className="col-6 d-flex gap-3">
        <div className="d-flex gap-1 align-items-center">
          <span>Sort By:</span>
          <select>Option</select>
        </div>
        <div className="d-flex gap-1 align-items-center">
          <span>View:</span>
          <img src="" alt="Grid" />
          <img src="" alt="Grid" />
        </div>
      </div>
      <div className="col-12">
        <button>Showing 7.7 Products Only</button>
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
      <div className="col-6">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
