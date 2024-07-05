import React from "react";
import testImg from "../../Images/nathan-dumlao-5Hl5reICevY-unsplash.jpg";
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
