import React from "react";

const CheckingoutProducts = () => {
  return (
    <div>
      <div className="shipping-products-title d-flex justify-content-between">
        <h5>Package 1 of 1</h5>
        <span>
          Shipped by <h5>Day to Day Online Store</h5>
        </span>
      </div>
      <div className="checkout-delivery-option">
        <span>Choose your delivery option</span>
        <div className="card">
          <div className="card-body">
            <div className="card-content">
              <img src="" alt="" />
              <div>
                <span className="check-out-product-individual-price">$ 10</span>
                <span className="d-block">Standard delivery</span>
                <span className="check-out-product-individual-guarantee">
                  Guaranteed by 22-23 Aug
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <img src="" alt="" />
          <div>
            <p>Product Title</p>
            <span>No brand, Color</span>
          </div>
        </div>
        <div>
          <p className="checkout-product-price">$ 30</p>
          <img src="" alt="" />
        </div>
        <div>
          <span>Qty: 2</span>
        </div>
      </div>
    </div>
  );
};

export default CheckingoutProducts;
