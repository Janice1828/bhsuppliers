import React from "react";
import { Link } from "react-router-dom";
import myanmarFlag from "../../src/Images/myanmar.png";
import bangladeshFlag from "../../src/Images/Flag-Bangladesh.png";
import pakistanFlag from "../../src/Images/Flag_of_Pakistan.svg";
import nepalFlag from "../../src/Images/Flag_of_Nepal.svg.png";
import srilankaFlag from "../../src/Images/srilanka.png";
import cashOnDelivery from "../../src/Images/cash-on-delivery.png";
import visaCard from "../../src/Images/visa.png";
import masterCard from "../../src/Images/mastercard.png";
import esewa from "../../src/Images/esewa.png";
import imePay from "../../src/Images/imepay.png";
import pciDss from "../../src/Images/pci-dss.jpeg";
import QR from "../../src/Images/qr.png";
import playStore from "../../src/Images/getiton-playstore.jpeg";
import appGallery from "../../src/Images/app-gallerry.png";
import appStore from "../../src/Images/app-store.png";
import darazLogo from "../../src/Images/nav-logo.png";
import Facebook from "../../src/Images/facebook.jpeg";
import Instagram from "../../src/Images/instagram.png";
import Youtube from "../../src/Images/youtube.png";
import Internet from "../../src/Images/internet.png";
const FooterLinks = () => {
  return (
    <div className="pt-5 d-flex w-75 m-auto">
      <div className="d-flex flex-column" style={{ paddingRight: "60px" }}>
        <h5 className="footer-links-header">Customer Care</h5>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Help Center
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          How to Buy
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Returns & Refunds
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Contact Us
        </Link>
        <h5 className="footer-links-header mt-4">Earn with Daraz</h5>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Daraz University
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Sell on Daraz
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Code of Conduct
        </Link>
      </div>
      <div className="d-flex flex-column" style={{ paddingRight: "60px" }}>
        <h5 className="footer-links-header">Daraz</h5>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          About Daraz
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Careers
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Daraz Blog
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Terms & Conditions
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Privacy Policy
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Digital Payments
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Daraz Customer University
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Daraz Affiliate program
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Review & Win
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-dark">
          Meet the winners
        </Link>
      </div>
      <div style={{ paddingRight: "60px", width: "400px" }}>
        <h5 className="footer-links-header w-auto">Daraz International</h5>
        <div className="row">
          <p className="footer-links d-flex gap-2 align-items-center w-auto">
            <img src={pakistanFlag} alt="" className="footer-countries-flag" />
            <span>Pakistan</span>
          </p>
          <p className="footer-links d-flex gap-2 align-items-center w-auto">
            <img
              src={bangladeshFlag}
              alt=""
              className="footer-countries-flag"
            />
            <span>Bangladesh</span>
          </p>
          <p className="footer-links d-flex gap-2 align-items-center w-auto">
            <img src={srilankaFlag} alt="" className="footer-countries-flag" />
            <span>Sri Lanka</span>
          </p>
          <p className="footer-links d-flex gap-2 align-items-center w-auto">
            <img src={myanmarFlag} alt="" className="footer-countries-flag" />
            <span>Myanmar</span>
          </p>
          <p className="footer-links d-flex gap-2 align-items-center">
            <img src={nepalFlag} alt="" className="footer-countries-flag" />
            <span>Nepal</span>
          </p>
        </div>
        <h5 className="footer-links-header">Payment Methods</h5>
        <div className="d-flex flex-wrap gap-2">
          <Link to="#">
            <img src={cashOnDelivery} className="payment-methods" alt="" />
          </Link>
          <Link to="#">
            <img src={visaCard} className="payment-methods" alt="" />
          </Link>
          <Link to="#">
            <img src={masterCard} className="payment-methods" alt="" />
          </Link>
          <Link to="#">
            <img src={esewa} alt="" className="payment-methods" />
          </Link>
          <br />
          <Link to="#">
            <img src={imePay} alt="" className="payment-methods " />
          </Link>
        </div>
        <h5 className="footer-links-header">Verified By</h5>
        <div>
          <img src={pciDss} className="footer-verifiedby-img" alt="" />
        </div>
      </div>
      <div style={{ paddingRight: "60px" }}>
        <h5 className="footer-links-header">Exclusive Deals and Offers!</h5>
        <div>
          <div className="d-flex gap-2">
            <div>
              <img src={QR} id="deals-offers-qr" alt="" />
            </div>
            <div className="d-flex flex-column gap-1">
              <img src={appStore} alt="" className="getiton-stores" />
              <img src={playStore} alt="" className="getiton-stores" />
              <img src={appGallery} alt="" className="getiton-stores" />
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 mt-4 mb-5">
            <span id="daraz-footer-logo">
              <img src={darazLogo} alt="" className="w-100 h-100" />
            </span>
            <div>
              <h5 id="happy-shopping" className="mb-0">
                Happy Shopping
              </h5>
              <p id="download-app" className="mb-0">
                Download App
              </p>
            </div>
          </div>
        </div>
        <h5 className="footer-links-header">Follow Us</h5>
        <div className="d-flex gap-4 align-items-center">
          <Link to="#" className="footer-social-medias">
            <img src={Facebook} alt="" className="w-100 h-100" />
          </Link>
          <Link to="#" className="footer-social-medias">
            <img src={Instagram} alt="" className="w-100 h-100" />
          </Link>
          <Link to="#" className="footer-social-medias">
            <img src={Youtube} alt="" className="w-100 h-100" />
          </Link>
          <Link to="#" className="footer-social-medias">
            <img src={Internet} alt="" className="h-100 w-100" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
