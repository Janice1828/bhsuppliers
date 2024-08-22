import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "../Icons/bin.png";
import Location from "../Icons/pin.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyGlobalContext } from "../context/CartProductsContext";
import AddedInCartProduct from "../components/purchasingproducts/AddedInCartProduct";
const Cart = () => {
  const navigate = useNavigate();
  const fetchedData = localStorage.getItem("cartAddedProducts");
  const arr: any[] = fetchedData ? JSON.parse(fetchedData) : [];
  const [addedProducts, setAddedProducts] = useState<any[]>([]);
  const [totalQty, setTotalQty] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(10);
  const shippingFee = 10;
  const [total, setTotal] = useState<number>(subTotal + shippingFee);
  useEffect(() => {
    axios.get("products_two.json").then((data) => {
      const fetchedData = data.data;
      const filteredData: any[] = fetchedData.filter((product: any) => {
        for (let i = 0; i < arr.length; i++) {
          if (product.id == arr[i].productId) {
            product.purchasedQty = arr[i].productQty;
            return product;
          }
        }
      });
      setAddedProducts(filteredData);
      console.log(filteredData);
      const subTotal = filteredData.reduce((accum, nextData) => {
        return accum + nextData.price * nextData.purchasedQty;
      }, 0);
      setSubTotal(subTotal);
      setTotal(subTotal + shippingFee);
    });
  }, []);
  const checkout = () => {
    navigate("/checkout");
  };
  const [checkoutSelected, setCheckoutSelected] = useState<any[]>([]);
  useEffect(() => {
    const getProducts = localStorage.getItem("cartAddedProducts");
    const getProductsArr: any[] = getProducts ? JSON.parse(getProducts) : [];
    let totalQty: number = 0;
    for (let i = 0; i < getProductsArr.length; i++) {
      totalQty += getProductsArr[i].productQty;
    }
    setTotalQty(totalQty);
  }, [addedProducts]);
  return (
    <>
      <Navbar />
      <MyGlobalContext.Provider
        value={{
          addedProducts,
          setAddedProducts,
          checkoutSelected,
          setCheckoutSelected,
          totalQty,
          setTotalQty,
          total,
          setTotal,
          subTotal,
          setSubTotal,
        }}
      >
        <div className="main">
          <div className="w-75 m-auto py-3">
            <div className="row">
              <div className="col-8">
                <div className="select-all-items d-flex align-items-center justify-content-between bg-light px-3">
                  {/* <span className="align-items-center d-flex gap-2">
                    <input type="checkbox" />
                    <span>SELECT ALL (1 ITEM(S))</span>
                  </span> */}
                  {/* <span className="d-flex align-items-center gap-1">
                    <img src={Delete} alt="Delete Icon" />
                    <span>DELETE</span>
                  </span> */}
                </div>
                <div className="selected-items bg-light my-3 px-3 pb-3 pt-1">
                  {/* <div className="d-flex align-items-center gap-1 mb-3">
                    <input type="checkbox" />{" "}
                    <Link to="#">Day to Day Online Store</Link>
                  </div> */}
                  {addedProducts.map((item, key) => (
                    <AddedInCartProduct
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      img={item.images}
                      price={item.price}
                      purchasedQty={item.purchasedQty}
                      data={addedProducts}
                    />
                  ))}
                </div>
              </div>
              <div className="col-4 cart-order-summary bg-light py-3 px-3">
                <div>
                  <h4 className="font-weight-normal location-title pb-1">
                    Location
                  </h4>
                  <div className="d-flex gap-2">
                    <img src={Location} alt="" className="cart-location-img" />
                    <p className="cart-location">
                      Ward 17 - Gwarko Area, Lalitpur Inside Ring Road,Bagmati
                      Province
                    </p>
                  </div>
                </div>
                <h4>Order Summary</h4>
                <div className="d-flex align-items-center justify-content-between subtotal-details">
                  <span className="cart-sub-total">
                    Subtotal ({totalQty} items)
                  </span>
                  <span className="cart-subtotal-product-price">
                    $ {subTotal}
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="cart-shipping-fee">Shipping Fee</span>
                  <span className="cart-shipping-price">$ {shippingFee}</span>
                </div>
                {/* <div className="discount-voucher mt-5">
                  <form
                    action=""
                    className="d-flex gap-2 justify-content-center"
                  >
                    <input type="" placeholder="Enter Voucher Code" />
                    <button className="cart-voucher-apply-btn">Apply</button>
                  </form>
                </div> */}
                <div className="d-flex align-items-center justify-content-between py-4">
                  <span className="cart-total">Total</span>
                  <span className="cart-total-price">$ {total}</span>
                </div>
                <button className="checkout-btn" onClick={checkout}>
                  PROCEED TO CHECKOUT ({totalQty})
                </button>
              </div>
            </div>
          </div>
        </div>
      </MyGlobalContext.Provider>
      <Footer />
    </>
  );
};

export default Cart;
