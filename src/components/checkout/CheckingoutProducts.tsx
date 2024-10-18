import React, { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";
import axios from "axios";
const CheckingoutProducts = () => {
  const [checkingOutProducts, setCheckingOutProducts] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState<any>(0);
  useEffect(() => {
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
      setCheckingOutProducts(filteredData);
    });
  }, []);
  return (
    <div className="bg-white mt-3">
      <div className="shipping-products-title px-2 gap-2 gap-sm-0 d-flex justify-content-between flex-column flex-sm-row">
        <span className="checkout-package-title">Package 1 of 1</span>
        <span className="shippedby-wrapper">
          Shipped by{" "}
          <span className="checkout-shipped-by-title">
            Day to Day Online Store
          </span>
        </span>
      </div>
      <div className="checkout-product-details-wrapper">
        <div className="checkout-delivery-option">
          <span className=" checkout-similar-fs-title d-block mb-2">
            Choose your delivery option
          </span>
          <div
            className="card delivery-card"
            style={{ width: "300px", border: "1px solid #0094B6" }}
          >
            <div className="card-body">
              <div className="card-content d-flex gap-2">
                <img src="" alt="" />
                <div>
                  <span className="check-out-product-individual-price">
                    $ 10
                  </span>
                  <span className="d-block checkout-similar-fs-title">
                    Standard delivery
                  </span>
                  <span className="check-out-product-individual-guarantee checkout-similar-fs-title">
                    Guaranteed by 22-23 Aug
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {checkingOutProducts.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            qty={item.purchasedQty}
            img={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckingoutProducts;
