import React from "react";

const Category = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const categoryName = params.get("categoryname");

  return (
    <div>
      <h5 className="productlist-filters-title">Category</h5>
      <span className=" ">{categoryName}</span>
    </div>
  );
};

export default Category;
