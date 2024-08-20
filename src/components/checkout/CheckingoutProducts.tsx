import React from "react";

const CheckingoutProducts = () => {
  return (
    <div className="bg-white mt-3">
      <div className="shipping-products-title d-flex justify-content-between">
        <span className="checkout-package-title">Package 1 of 1</span>
        <span className="shippedby-wrapper">
          Shipped by{" "}
          <span className="checkout-shipped-by-title">
            Day to Day Online Store
          </span>
        </span>
      </div>
      <div className="checkout-product-details-wrapper">
        <div className="checkout-delivery-option">
          <span className=" checkout-similar-fs-title d-block mb-2">
            Choose your delivery option
          </span>
          <div
            className="card"
            style={{ width: "300px", border: "1px solid #0094B6" }}
          >
            <div className="card-body">
              <div className="card-content d-flex gap-2">
                <img src="" alt="" />
                <div>
                  <span className="check-out-product-individual-price">
                    $ 10
                  </span>
                  <span className="d-block checkout-similar-fs-title">
                    Standard delivery
                  </span>
                  <span className="check-out-product-individual-guarantee checkout-similar-fs-title">
                    Guaranteed by 22-23 Aug
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <div className="d-flex gap-2">
            <img src="" alt="" />
            <div>
              <p className="checkout-product-title mb-0">Product Title</p>
              <span className="checkout-product-details">No brand, Color</span>
            </div>
          </div>
          <div>
            <p className="checkout-product-price">$ 30</p>
            <img src="" alt="" />
          </div>
          <div>
            <span className="checkout-product-qty">Qty: 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckingoutProducts;
