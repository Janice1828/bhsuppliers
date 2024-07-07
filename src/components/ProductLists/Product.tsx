import React from "react";
import productImg from "../../Images/mastercard.png";
const Product = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-content">
          <img src={productImg} alt="" className="productlist-product-img" />
          <p className="productlist-product-title">
            Pair of Anti Uv Arm Sleeves
          </p>
          <div className="d-flex gap-2 align-items-center">
            <span className="productlist-products-rating">4/5(220)</span>
            <span className="productlist-sold-numbers">4k sold</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button>Free Delivery</button>
            <button>5 Vouchers</button>
          </div>
          <p className="productlist-product-price">Rs.85</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
