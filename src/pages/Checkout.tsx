import React from "react";
import Shippingaddress from "../components/checkout/Shippingaddress";
import CheckingoutProducts from "../components/checkout/CheckingoutProducts";
import Payment from "../components/checkout/Payment";

const Checkout = () => {
  return (
    <>
      <div className="row m-0 p-0 w-75 m-auto">
        <div className="col-8">
          <div>
            <Shippingaddress />
          </div>
          <div>
            <CheckingoutProducts />
          </div>
        </div>
        <div className="col-4">
          <Payment />
        </div>
      </div>
    </>
  );
};

export default Checkout;
