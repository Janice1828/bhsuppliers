import React from "react";
import { Link } from "react-router-dom";
import testImg from "../../Images/Flag_of_Nepal.svg.png";
const Flashsale = () => {
  return (
    <>
      <h3>Flash Sale</h3>
      <div className="card">
        <div className="card-body">
          <div className="card-content">
            <div>
              <div>
                <p>On Sale Now</p>
                <p>Ending in TIming</p>
              </div>
              <div>
                <Link to="#">SHOP MORE</Link>
              </div>
            </div>
            <div>
              <div>
                <img src={testImg} alt="" style={{ height: "50px" }} />
                <p>3in 1 Water bottles lock</p>
                <p>Rs.495</p>
                <span>Rs. 899</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashsale;
