import React from "react";
import { Link } from "react-router-dom";
import Delete from "../Icons/bin.png";
import Diaper from "../Images/diaper.jpg";
import Whilist from "../Icons/love.png";
const Cart = () => {
  return (
    <div className="w-75 m-auto">
      <div className="row">
        <div className="col-9">
          <div className="select-all-items d-flex align-items-center justify-content-between">
            <span>SELECT ALL (1 ITEM(S))</span>
            <span className="d-flex align-items-center gap-1">
              <img src={Delete} alt="Delete Icon" />
              <span>DELETE</span>
            </span>
          </div>
          <div className="selected-items">
            <div className="d-flex align-items-center gap-1">
              <input type="checkbox" />{" "}
              <Link to="#">Day to Day Online Store</Link>
            </div>
            <p className="border-bottom d-flex justify-content-end">
              Earliest Delivery : <span>28 Jul</span>
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <input type="checkbox" />
                <div>
                  <img src={Diaper} alt="" className="cart-product-img" />
                  <div>
                    <span className="cart-product-title">Door guard 39</span>
                    <span className="cart-product-details">
                      No brand, color Family: Brown
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div>
                  <span className="cart-product-discounted-price">Rs. 100</span>
                  <span className="cart-product-original-price">
                    <s>Rs. 100</s>
                  </span>
                  <span className="cart-product-discounted-percentage">
                    -23%
                  </span>
                  <div className="d-flex gap-2 product-action-icons">
                    <img src={Whilist} alt="" />
                    <img src={Delete} alt="" />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <button className="cart-qty-btns">-</button>
                  <span className="cart-qty">1</span>
                  <button className="cart-qty-btns">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 cart-order-summary">
          <div>
            <h4 className="fw-400"></h4>
          </div>
          <h4>Order Summary</h4>
          <div className="d-flex align-items-center justify-content-between subtotal-details">
            <span className="cart-sub-total">Subtotal (1 items)</span>
            <span className="cart-subtotal-product-price">Rs. 100</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="cart-shipping-fee">Shipping Fee</span>
            <span className="cart-shipping-price">Rs.100</span>
          </div>
          <div className="discount-voucher">
            <form action="" className="d-flex gap-2">
              <input type="" placeholder="Enter Voucher Code" />
              <button className="cart-voucher-apply-btn">Apply</button>
            </form>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="cart-total">Total</span>
            <span className="cart-total-price">Rs.200</span>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT(1)</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
