import React from "react";
import { Link } from "react-router-dom";
const Product = ({
  title,
  price,
  img,
  id,
}: {
  title: string;
  price: number;
  img: string;
  id: number;
}) => {
  return (
    <Link to={`/productdetail?id=${id}`} className="text-decoration-none">
      <div className="card border-0">
        <div className="card-body">
          <div className="card-content">
            <img src={img} alt="" className="productlist-product-img" />
            <p className="productlist-product-title mb-0">{title}</p>
            <div
              className="d-flex gap-2 align-items-center"
              style={{ padding: "2px 0px 5px 0px" }}
            >
              <span className="productlist-products-rating">4/5(220)</span>
              <span className="productlist-sold-numbers">4k sold</span>
            </div>
            <div className="d-flex align-items-center gap-2 products-vouchers">
              <button>Free Delivery</button>
              <button>5 Vouchers</button>
            </div>
            <p className="productlist-product-price">Rs.{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
