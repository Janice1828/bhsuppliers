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
    <div className="col-2">
      <Link to={`/productdetail?id=${id}`} className="text-decoration-none">
        <div className="row w-100 px-0 mx-0">
          <div className="card rounded-0">
            <div className="card-body">
              <div className="card-content">
                <img src={img} style={{ height: "100px" }} alt="" />
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
