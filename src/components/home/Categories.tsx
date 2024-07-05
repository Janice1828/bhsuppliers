import React from "react";
import diaper from "../../Images/diaper.jpg";
const Categories = () => {
  return (
    <>
      <h3 className="home-headings">Categories</h3>
      <div className="category-product">
        <div className="card rounded-0" style={{ width: "160px" }}>
          <div className="card-body">
            <div className="card-content d-flex flex-column">
              <img src={diaper} alt="" />
              <span className="categories-title text-center pt-2">
                Disposable Diapers
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
