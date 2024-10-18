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
      <div className="category-product col-lg-2 col-md-3 col-sm-4 col-6 p-0 border-none">
        <Link
          to={`/products?id=${id}&categoryname=${categoryName}`}
          className="text-decoration-none"
        >
          <div className="card rounded-0 border-light">
            <div className="card-body pb-4 border-none">
              <div className="card-content d-flex flex-column align-items-center">
                <img
                  src={img}
                  alt=""
                  style={{ height: "80px", width: "80px" }}
                />
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
