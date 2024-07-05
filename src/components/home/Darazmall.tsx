import React from "react";
import testImg from "../../Images/Flag_of_Nepal.svg.png";
const Darazmall = () => {
  return (
    <>
      <h3 className="home-headings">DarazMall</h3>
      <div className="row w-100 px-0 mx-0">
        <div className="col-2 card rounded-0">
          <div className="card-body">
            <div className="card-content">
              <div className="card-img">
                <img src={testImg} style={{ height: "100px" }} alt="" />
                <img src={testImg} alt="" style={{ height: "20px" }} />
              </div>
              <p className="darazmall-title mb-0 pb-0 mt-2">The Derma co</p>
              <span className="darazmall-subtitle">The Derma co</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Darazmall;
