import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="cart-order-summary bg-light py-3 px-3">
        <h4>Order Summary</h4>
        <div className="d-flex align-items-center justify-content-between subtotal-details">
          <span className="cart-sub-total">Subtotal (1 items)</span>
          <span className="cart-subtotal-product-price">$ 0</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="cart-shipping-fee">Shipping Fee</span>
          <span className="cart-shipping-price">$ 0</span>
        </div>
        <div className="discount-voucher mt-5">
          <form action="" className="d-flex gap-2 justify-content-center">
            <input type="" placeholder="Enter Voucher Code" />
            <button className="cart-voucher-apply-btn">Apply</button>
          </form>
        </div>
        <div className="d-flex align-items-center justify-content-between py-4">
          <span className="cart-total">Total</span>
          <span className="cart-total-price">$ 0</span>
        </div>
        <button
          className="checkout-btn"
          onClick={() => alert("Work On Progress")}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
