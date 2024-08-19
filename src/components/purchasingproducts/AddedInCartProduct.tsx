import React from "react";
import Whilist from "../../Icons/love.png";
import Diaper from "../../Images/diaper.jpg";
import Delete from "../../Icons/bin.png";

const AddedInCartProduct = ({
  title,
  img,
  price,
}: {
  title: string;
  img: string;
  price: number;
}) => {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <div className="d-flex align-items-center gap-2">
            <input type="checkbox" />
            <img src={img} alt="" className="cart-product-img" />
            <div className="d-flex flex-column">
              <span className="cart-product-title">{title}</span>
              <span className="cart-product-details">
                No brand, color Family: Brown
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex gap-4">
          <div className="d-flex flex-column">
            <span className="cart-product-discounted-price">$ {price}</span>
            <div className="d-flex gap-2 product-action-icons">
              <img src={Whilist} alt="" />
              <img src={Delete} alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <button className="cart-qty-btns">-</button>
            <span className="cart-qty">1</span>
            <button className="cart-qty-btns">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddedInCartProduct;
