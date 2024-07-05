import React from "react";
import testImg from "../../Images/Flag_of_Nepal.svg.png";
import { Link } from "react-router-dom";
const JustForYou = () => {
  return (
    <>
      <h3 className="home-headings">Just For You</h3>
      <div className="row w-100 px-0 mx-0">
        <div className="col-2 card rounded-0">
          <div className="card-body">
            <div className="card-content">
              <img src={testImg} style={{ height: "100px" }} alt="" />
              <p className="justforyou-title mb-0 pt-2">
                open Military Gps smart watch men
              </p>
              <p className="justforyou-discounted-price mb-0">Rs.587</p>
              <span className="justforyou-price">Rs.1572</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JustForYou;
