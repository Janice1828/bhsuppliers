import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <h5>Customer Care</h5>
        <Link to="#">Help Center</Link>
        <Link to="#">How to Buy</Link>
        <Link to="#">Returns & Refunds</Link>
        <Link to="#">Contact Us</Link>
        <h5>Earn with Daraz</h5>
        <Link to="#">Daraz University</Link>
        <Link to="#">Sell on Daraz</Link>
        <Link to="#">Code of Conduct</Link>
      </div>
      <div>
        <h5>Daraz</h5>
        <Link to="#">About Daraz</Link>
        <Link to="#">Careers</Link>
        <Link to="#">Daraz Blog</Link>
        <Link to="#">Terms & Conditions</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Digital Payments</Link>
        <Link to="#">Daraz Customer University</Link>
        <Link to="#">Daraz Affiliate program</Link>
        <Link to="#">Review & Win</Link>
        <Link to="#">Meet the winners</Link>
      </div>
      <div>
        <h5>Daraz International</h5>
        <div>
          <p>Pakistan</p>
          <p>Bangladesh</p>
          <p>Sri Lanka</p>
          <p>Myanmar</p>
          <p>Nepal</p>
        </div>
        <h5>Payment Methods</h5>
        <div>
          <Link to="#">Cash On Delivery</Link>
          <Link to="#">Visa Card</Link>
          <Link to="#">Mastercard</Link>
          <Link to="#">Esewa</Link>
          <Link to="#">Imepay</Link>
        </div>
        <h5>Verified By</h5>
        <div>PicDcss</div>
      </div>
      <div>
        <h5>Exclusive Deals and Offers!</h5>
        <div>
          <div>QR</div>
          <div>Imgs</div>
          <div>Happy Shopping</div>
        </div>
        <h5>Follow Us</h5>
        <div>
          <Link to="#">Facebook</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">Youtube</Link>
          <Link to="#">Browser</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
