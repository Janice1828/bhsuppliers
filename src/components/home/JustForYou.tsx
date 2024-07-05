import React from "react";
import testImg from "../../Images/Flag_of_Nepal.svg.png";
import { Link } from "react-router-dom";
const JustForYou = () => {
  return (
    <>
      <h3>Just For You</h3>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="card-content">
              <img src={testImg} style={{ height: "100px" }} alt="" />
              <p>open Military Gps smart watch men</p>
              <p>Rs.587</p>
              <span>Rs.1572</span>
            </div>
          </div>
        </div>
      </div>
      <div className="load-more-products-btn">
        <Link to="#">Load More</Link>
      </div>
    </>
  );
};

export default JustForYou;
