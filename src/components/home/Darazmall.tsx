import React from "react";
import testImg from "../../Images/nathan-dumlao-LPRrEJU2GbQ-unsplash.jpg";
const Darazmall = () => {
  return (
    <>
      <h3>DarazMall</h3>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="card-content">
              <div className="card-img">
                <img src={testImg} style={{ height: "100px" }} alt="" />
                <img src={testImg} alt="" style={{ height: "20px" }} />
              </div>
              <p>The Derma co</p>
              <span>The Derma co</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Darazmall;
