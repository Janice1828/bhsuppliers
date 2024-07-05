import React from "react";
import { Link } from "react-router-dom";
import testImg from "../../Images/Flag_of_Nepal.svg.png";
const Flashsale = () => {
  return (
    <>
      <h3 className="home-headings">Flash Sale</h3>
      <div className="card rounded-0">
        <div className="card-body p-0">
          <div className="card-content">
            <div className="d-flex justify-content-between px-2 py-2 align-items-center border-bottom ">
              <div className="d-flex gap-5">
                <p>On Sale Now</p>
                <p>Ending in Timing</p>
              </div>
              <div>
                <Link to="#" id="shop-more-btn">
                  SHOP MORE
                </Link>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-1">
                <img src={testImg} alt="" style={{ height: "50px" }} />
                <p
                  className="flashsale-title p-0 m-0 mt-2"
                  style={{ width: "100px" }}
                >
                  3in 1 Water bottles lock
                </p>
                <p className="flashsale-discounted-price p-0 m-0">Rs.495</p>
                <span className="flashsale-price">Rs. 899</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashsale;
