import React from "react";
import { Link } from "react-router-dom";

const Products = ({
  img,
  productName,
  price,
  id,
}: {
  img: string;
  productName: string;
  price: number;
  id: number;
}) => {
  return (
    <div className="col-2 mt-0">
      <Link to={`/productdetail?id=${id}`} className="text-decoration-none">
        <div className="row w-100 px-0 mx-0">
          <div className="card rounded-0 border-light px-0">
            <div className="card-body px-0 pt-0">
              <img
                src={img}
                style={{ height: "189px", width: "100%" }}
                alt=""
              />
              <div className="card-content home-product-content">
                <p className="home-product-title mb-0 pt-2">{productName}</p>
                <p className="home-product-discounted-price mb-0">$ {price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products;
