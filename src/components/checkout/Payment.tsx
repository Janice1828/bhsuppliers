import React, { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/CartProductsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const [totalQty, setTotalQty] = useState<any>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const getProducts = localStorage.getItem("cartAddedProducts");
    const getProductsArr: any[] = getProducts ? JSON.parse(getProducts) : [];
    let totalQty: number = 0;
    for (let i = 0; i < getProductsArr.length; i++) {
      totalQty += getProductsArr[i].productQty;
    }
    setTotalQty(totalQty);
    axios.get("products_two.json").then((data) => {
      const fetchedData = data.data;
      const localData = localStorage.getItem("cartAddedProducts");
      const localDataArr = localData ? JSON.parse(localData) : [];
      const filteredData: any[] = fetchedData.filter((product: any) => {
        for (let i = 0; i < localDataArr.length; i++) {
          if (product.id == localDataArr[i].productId) {
            product.purchasedQty = localDataArr[i].productQty;
            return product;
          }
        }
      });
      const subTotal = filteredData.reduce((accum, nextData) => {
        return accum + nextData.price * nextData.purchasedQty;
      }, 0);
      setSubTotal(subTotal);
      setTotal(subTotal + deliveryFee);
    });
  }, []);
  const deliveryFee = 10;
  const checkOut = () => {
    alert("Checked Out Successfully !");
    localStorage.setItem("cartAddedProducts", "");
    navigate("/");
  };
  return (
    <div>
      <div className="cart-order-summary bg-light py-3 px-3">
        <h4>Order Summary</h4>
        <div className="d-flex align-items-center justify-content-between subtotal-details">
          <span className="cart-sub-total">Total Items ({totalQty} items)</span>
          <span className="cart-subtotal-product-price">$ {subTotal}</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="cart-shipping-fee">Delivery Fee Fee</span>
          <span className="cart-shipping-price">$ {deliveryFee}</span>
        </div>

        <div className="d-flex align-items-center justify-content-between py-4">
          <span className="cart-total">Total</span>
          <span className="cart-total-price">$ {total}</span>
        </div>
        <button className="checkout-btn" onClick={checkOut}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
