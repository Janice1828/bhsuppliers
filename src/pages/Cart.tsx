import React from "react";
import { Link } from "react-router-dom";
import Delete from "../Icons/bin.png";
import Diaper from "../Images/diaper.jpg";
import Whilist from "../Icons/love.png";
import Location from "../Icons/pin.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterContent from "../components/FooterContent";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="w-75 m-auto py-3">
          <div className="row">
            <div className="col-8">
              <div className="select-all-items d-flex align-items-center justify-content-between bg-light px-3">
                <span className="align-items-center d-flex gap-2">
                  <input type="checkbox" />
                  <span>SELECT ALL (1 ITEM(S))</span>
                </span>
                <span className="d-flex align-items-center gap-1">
                  <img src={Delete} alt="Delete Icon" />
                  <span>DELETE</span>
                </span>
              </div>
              <div className="selected-items bg-light my-3 px-3 pb-3 pt-1">
                <div className="d-flex align-items-center gap-1">
                  <input type="checkbox" />{" "}
                  <Link to="#">Day to Day Online Store</Link>
                </div>

                <div className="d-flex justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <input type="checkbox" />
                      <img src={Diaper} alt="" className="cart-product-img" />
                      <div className="d-flex flex-column">
                        <span className="cart-product-title">
                          Door guard 39
                        </span>
                        <span className="cart-product-details">
                          No brand, color Family: Brown
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column">
                      <span className="cart-product-discounted-price">
                        Rs. 100
                      </span>
                      <span
                        className="cart-product-original-price"
                        style={{ marginBottom: "10px" }}
                      >
                        <s>Rs. 100</s>
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
            <div className="col-4 cart-order-summary bg-light py-3 px-3">
              <div>
                <h4 className="font-weight-normal location-title pb-1">
                  Location
                </h4>
                <div className="d-flex gap-2">
                  <img src={Location} alt="" className="cart-location-img" />
                  <p className="cart-location">
                    Ward 17 - Gwarko Area, Lalitpur Inside Ring Road,Bagmati
                    Province
                  </p>
                </div>
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
              <div className="discount-voucher mt-5">
                <form action="" className="d-flex gap-2 justify-content-center">
                  <input type="" placeholder="Enter Voucher Code" />
                  <button className="cart-voucher-apply-btn">Apply</button>
                </form>
              </div>
              <div className="d-flex align-items-center justify-content-between py-4">
                <span className="cart-total">Total</span>
                <span className="cart-total-price">Rs.200</span>
              </div>
              <button className="checkout-btn">PROCEED TO CHECKOUT(1)</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
