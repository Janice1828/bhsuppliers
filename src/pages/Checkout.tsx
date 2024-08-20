import React from "react";
import Shippingaddress from "../components/checkout/Shippingaddress";
import CheckingoutProducts from "../components/checkout/CheckingoutProducts";
import Payment from "../components/checkout/Payment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterContent from "../components/FooterContent";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="py-4 main">
        <div className="row p-0 w-75 m-auto">
          <h2 className="col-12 bg-danger text-light mb-5">
            Work On Progress{" "}
          </h2>
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
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
