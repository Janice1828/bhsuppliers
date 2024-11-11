import React from "react";
import saleImg from "../../Images/sale-a.jpg";
const Sale = () => {
  return (
    <div>
      <img
        src={saleImg}
        alt=""
        id="sale-img"
        className="w-100 rounded-2"
        style={{ height: "500px", objectFit: "cover" }}
      />
    </div>
  );
};

export default Sale;
