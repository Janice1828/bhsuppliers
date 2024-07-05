import React from "react";
import testImg from "../../Images/mastercard.png";
const Categories = () => {
  return (
    <>
      <h3>Categories</h3>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="card-content">
              <img src={testImg} alt="" style={{ height: "50px" }} />
              <span>Disposable Diapers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
