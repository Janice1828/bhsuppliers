import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Product = ({
  title,
  price,
  img,
  id,
  listClass,
}: {
  title: string;
  price: number;
  img: string;
  id: number;
  listClass: string;
}) => {
  return (
    <Link to={`/productdetail?id=${id}`} className="text-decoration-none">
      <div className="card border-0">
        <div className="card-body">
          <div
            className={
              listClass !== "col-xxl-3 col-md-6 col-12"
                ? "card-content"
                : "card-content d-flex justify-content-between flex-column"
            }
          >
            <div
              className={
                listClass !== "col-xxl-3 col-md-6 col-12"
                  ? "d-flex gap-3 align-items-center"
                  : ""
              }
            >
              <img
                src={img}
                alt=""
                className={
                  listClass !== "col-xxl-3 col-md-6 col-12"
                    ? "productlist-product-img-width-3"
                    : "productlist-product-img-full-width"
                }
              />
              <div className="" style={{ padding: "2px 0px 5px 0px" }}>
                <p className="productlist-product-title mb-0">{title}</p>
                <div className="d-flex gap-2 align-items-center my-1 justify-content-center">
                  <span className="productlist-products-rating">4/5(220)</span>
                  <span className="productlist-sold-numbers">4k sold</span>
                </div>
                <div className="d-flex mt-1 align-items-center gap-2 products-vouchers justify-content-center">
                  <button>Free Delivery</button>
                  <button>5 Vouchers</button>
                </div>
              </div>
            </div>
            <p className="productlist-product-price">$ {price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
