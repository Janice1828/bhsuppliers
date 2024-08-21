import React from "react";
import Whilist from "../../Icons/love.png";
import Diaper from "../../Images/diaper.jpg";
import Delete from "../../Icons/bin.png";
import { useState } from "react";
import { get } from "http";
import axios from "axios";
import { useGlobalContext } from "../../context/CartProductsContext";
const AddedInCartProduct = ({
  title,
  img,
  price,
  purchasedQty,
  id,
  data,
}: {
  id: number;
  title: string;
  img: string;
  price: number;
  purchasedQty: number;
  data: any[];
}) => {
  const { addedProducts, setAddedProducts } = useGlobalContext();
  const [trackQty, setTrackQty] = useState<number>(purchasedQty);
  const increaseQty = () => {
    const getLocalData = localStorage.getItem("cartAddedProducts");
    const localDataArr: any[] = getLocalData ? JSON.parse(getLocalData) : [];
    for (let i = 0; i < localDataArr.length; i++) {
      if (localDataArr[i].productId == id) {
        localDataArr[i].productQty += 1;
      }
    }
    localStorage.setItem("cartAddedProducts", JSON.stringify(localDataArr));
    setTrackQty(trackQty + 1);
  };
  const decreaseQty = () => {
    if (trackQty > 1) {
      const getLocalData = localStorage.getItem("cartAddedProducts");
      const localDataArr: any[] = getLocalData ? JSON.parse(getLocalData) : [];
      for (let i = 0; i < localDataArr.length; i++) {
        if (localDataArr[i].productId == id) {
          localDataArr[i].productQty -= 1;
        }
      }
      localStorage.setItem("cartAddedProducts", JSON.stringify(localDataArr));
      setTrackQty(trackQty - 1);
    }
  };
  const deleteProduct = () => {
    const getProducts = localStorage.getItem("cartAddedProducts");
    const fetchedProductsArr: any[] = getProducts
      ? JSON.parse(getProducts)
      : [];
    const filterData = fetchedProductsArr.filter((product) => {
      if (product.productId != id) {
        return product;
      }
    });
    axios.get("products_two.json").then((data) => {
      const fetchedData = data.data;
      const filteredData: any[] = fetchedData.filter((product: any) => {
        for (let i = 0; i < filterData.length; i++) {
          if (product.id == filterData[i].productId) {
            product.purchasedQty = filterData[i].productQty;
            return product;
          }
        }
      });
      setAddedProducts(filteredData);
    });
    localStorage.setItem("cartAddedProducts", JSON.stringify(filterData));
  };
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
              <img
                src={Delete}
                className="cursor-pointer"
                alt=""
                onClick={deleteProduct}
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <button className="cart-qty-btns" onClick={decreaseQty}>
              -
            </button>
            <span className="cart-qty">{trackQty}</span>
            <button className="cart-qty-btns" onClick={increaseQty}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddedInCartProduct;
