import React from "react";
import { Link } from "react-router-dom";
import nepalFlag from "../../src/Images/Flag_of_Nepal.svg.png";
import cashOnDelivery from "../../src/Images/cash-on-delivery.png";
import visaCard from "../../src/Images/visa.png";
import masterCard from "../../src/Images/mastercard.png";
import Facebook from "../../src/Images/facebook.jpeg";
import Instagram from "../../src/Images/instagram.png";
import Americalogo from "../../src/Images/america-flag.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FooterLinks = () => {
  const availableCountries = [
    {
      name: "America",
      img: Americalogo,
    },
    {
      name: "Nepal",
      img: nepalFlag,
    },
  ];
  const socialMediaLinks = [FaFacebook, AiFillInstagram];
  return (
    <div className="pt-5 mt-5 pb-5 text-light d-flex justify-content-between w-75 m-auto flex-wrap flex-xl-nowrap gap-3 gap-xl-0">
      <div
        className="d-flex flex-column sm-no-px"
        style={{ paddingRight: "60px" }}
      >
        <h5
          className="footer-links-header sm-w-fit-content"
          style={{ width: "240px" }}
        >
          Customer Care
        </h5>

        <Link to="#" className="footer-links text-decoration-none text-light">
          Contact Us
        </Link>
      </div>
      <div
        className="d-flex flex-column sm-no-px"
        style={{ paddingRight: "60px" }}
      >
        <h5
          className="footer-links-header sm-w-fit-content"
          style={{ width: "240px" }}
        >
          BH Suppliers
        </h5>

        <Link to="#" className="footer-links text-decoration-none text-light">
          Careers
        </Link>

        <Link to="#" className="footer-links text-decoration-none text-light">
          Terms & Conditions
        </Link>
        <Link to="#" className="footer-links text-decoration-none text-light">
          Privacy Policy
        </Link>
      </div>
      <div
        className="sm-no-px sm-w-fit-content"
        style={{ paddingRight: "60px", width: "294px" }}
      >
        <h5 className="footer-links-header w-auto">
          BH Suppliers International
        </h5>
        <div className="d-flex flex-wrap gap-4">
          {availableCountries.map((country, key) => (
            <p
              key={key}
              className="footer-links d-flex align-items-center"
              style={{ gap: "7px" }}
            >
              <img src={country.img} alt="" className="footer-countries-flag" />
              <span>{country.name}</span>
            </p>
          ))}
        </div>
      </div>
      <div>
        <h5 className="footer-links-header">Follow Us</h5>
        <div className="d-flex gap-2 justify-content-center align-items-center">
          {socialMediaLinks.map((MediaIcon, key) => (
            <Link to="#" key={key} className="footer-social-medias">
              <MediaIcon style={{ color: "#fff", fontSize: "25px" }} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
