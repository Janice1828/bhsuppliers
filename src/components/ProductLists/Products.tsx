import React, { useEffect } from "react";
import Product from "./Product";
import Grid from "../../Icons/visualization.png";
import List from "../../Icons/list.png";
import { useState } from "react";
const Products = ({
  data,
  updateProducts,
}: {
  data: any[];
  updateProducts: any;
}) => {
  const [productsListView, setProductsListView] = useState<string>(
    "col-xxl-3 col-md-6 col-12"
  );
  function sortProducts(event: React.ChangeEvent<HTMLSelectElement>) {
    const value: number = Number(event.target.value);
    let sortedProducts: any[] = [];
    if (value == 1) {
      sortedProducts = data.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = data.sort((a, b) => a.price - b.price);
    }
    updateProducts(sortedProducts);
  }
  const productViewGrid = () => {
    setProductsListView("col-xxl-3");
  };
  const productViewList = () => {
    setProductsListView("col-12");
  };
  return (
    <div className="row">
      <div className="col-lg-6">
        <span className="founded-items-number">
        </span>
      </div>
      <div className="col-lg-6 d-flex gap-3 flex-column flex-xxl-row align-items-end align-items-xxl-center">
        <div className="d-flex gap-1 align-items-sm-center align-items-start flex-sm-row flex-column">
          <span className="sort-by-view">Sort By:</span>
          <select className="sort-by-filter-options" onChange={sortProducts}>
            <option value="">Best Match</option>
            <option value="0">price low to high</option>
            <option value="1">price high to low</option>
          </select>
        </div>
        <div className="d-flex gap-1 align-items-center">
          <span>View:</span>
          <img
            src={Grid}
            alt="Grid"
            className="product-view-order cursor-pointer"
            style={{ margin: "0px 6px" }}
            onClick={productViewGrid}
          />
          <img
            src={List}
            alt="List"
            onClick={productViewList}
            className="product-view-order cursor-pointer"
          />
        </div>
      </div>
      <div className="col-12 border-1"></div>
      <div className="col-12 row">
        {data.map((product) => (
          <div className={`${productsListView}`} key={product.id}>
            <Product
              title={product.title}
              price={product.price}
              img={product.images[0]}
              id={product.id}
              listClass={productsListView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
