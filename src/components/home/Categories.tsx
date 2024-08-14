import React from "react";
import diaper from "../../Images/diaper.jpg";
import { Link } from "react-router-dom";
const Categories = ({
  categoryName,
  img,
  id,
}: {
  categoryName: string;
  img: string;
  id: number;
}) => {
  return (
    <>
      <div className="category-product col-2">
        <Link to={`/products?id=${id}`} className="text-decoration-none">
          <div className="card rounded-0" style={{ width: "160px" }}>
            <div className="card-body">
              <div className="card-content d-flex flex-column">
                <img src={img} alt="" />
                <span className="categories-title text-center pt-2">
                  {categoryName}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Categories;
