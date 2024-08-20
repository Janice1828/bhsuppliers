import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterLinks from "../components/FooterLinks";
import diaper from "../../src/Images/diaper.jpg";
import { Link } from "react-router-dom";
import Location from "../Icons/pin.png";
import Cash from "../Icons/cash.png";
import Info from "../Icons/info.png";
import Trustedbrand from "../Icons/100-percent.png";
import Warranty from "../Icons/security.png";
import Chat from "../Icons/chat.png";
import Ratingstar from "../Icons/rating-star.png";
import { useState } from "react";
import axios from "axios";
import { get } from "http";
import { useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const productId = params.get("id");
  const [productDetail, setProductDetail] = useState<any>({});
  useEffect(() => {
    axios.get("products_two.json").then((data) => {
      const displayingProductDetail = data.data.filter((product: any) => {
        if (product.id == productId) {
          return product;
        }
      });
      setProductDetail(displayingProductDetail[0]);
    });
  }, []);
  const [quantityCount, setQuantityCount] = useState<any>(1);

  const decreaseQuantityCount = () => {
    quantityCount > 1
      ? setQuantityCount(quantityCount - 1)
      : setQuantityCount(1);
  };
  const increaseQuantityCount = () => {
    setQuantityCount(quantityCount + 1);
  };
  const addToCartProducts = () => {
    const getData = localStorage.getItem("cartAddedProducts");
    const newProduct = `{ "productId": ${productId}, "productQty": ${quantityCount} }`;
    if (getData) {
      const fetchedDataArr: any[] = getData ? JSON.parse(getData) : [];
      let checkingExistingDataFlag = false;
      let updatedDataArr = fetchedDataArr.map((item) => {
        if (item.productId == productId) {
          item.productQty += quantityCount;
          checkingExistingDataFlag = true;
        }
        return item;
      });
      if (checkingExistingDataFlag == false) {
        updatedDataArr.push(JSON.parse(newProduct));
      }
      localStorage.setItem("cartAddedProducts", JSON.stringify(updatedDataArr));
      navigate("/cart");
    } else {
      localStorage.setItem("cartAddedProducts", `[${newProduct}]`);
      navigate("/cart");
    }
  };
  const buyNow = () => {
    alert("Work In Progress !");
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="product-detail-container">
        <div className="w-75 m-auto">
          <p className="productdetail-filter-title">Fashion</p>
          <div className="row">
            <div className="col-8">
              <div className="d-flex gap-4">
                <div className="">
                  <div className="productDetail-productImg">
                    <img src={productDetail.images} alt="Product Image" />
                  </div>
                  <hr style={{ margin: "10px 0px" }} />
                  <div className="d-flex gap-2 detailed-img-lists mt-2">
                    <img
                      src={
                        Object.keys(productDetail).length > 0
                          ? productDetail.images[1]
                          : ""
                      }
                      alt="Img 1"
                    />
                    <img
                      src={
                        Object.keys(productDetail).length > 0
                          ? productDetail.images[2]
                          : ""
                      }
                      alt="Img 1"
                      className="object-fit"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="productDetail-product-title mb-3">
                    {productDetail.title}
                  </h2>
                  <div className="product-detail-rating d-flex align-items-center gap-2 mb-1">
                    <div className="d-flex align-items-center">
                      <img
                        src={Ratingstar}
                        alt="Rating Img"
                        className="product-detail-title-rating-star"
                      />{" "}
                      <img
                        src={Ratingstar}
                        alt="Rating Img"
                        className="product-detail-title-rating-star"
                      />{" "}
                      <img
                        src={Ratingstar}
                        alt="Rating Img"
                        className="product-detail-title-rating-star"
                      />{" "}
                      <img
                        src={Ratingstar}
                        alt="Rating Img"
                        className="product-detail-title-rating-star"
                      />{" "}
                      <img
                        src={Ratingstar}
                        alt="Rating Img"
                        className="product-detail-title-rating-star"
                      />{" "}
                    </div>
                    <span className="productDetail-rating-no">No Ratings</span>
                  </div>
                  <div className="productDetail-brand">
                    <p style={{ marginBottom: "10px" }}>
                      <span className="title">Brand:</span>{" "}
                      <span className="brand-name">No Brand</span>
                    </p>
                  </div>

                  <div className="productDetail-price">
                    <span className="price">${productDetail.price}</span>
                  </div>
                  {/* <div className="productDetail-promotions">
                    <span>Promotions</span>
                    <img src="" alt="Promotion Img" />
                  </div> */}
                  <div className="productDetail-purchasing-qty">
                    <div className="d-flex gap-3 align-items-center">
                      <span className="w-auto quantity">Quantity</span>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          className="productDetail-qty-btns"
                          onClick={decreaseQuantityCount}
                        >
                          -
                        </button>
                        <span className="productDetail-qty">
                          {quantityCount}
                        </span>
                        <button
                          className="productDetail-qty-btns"
                          onClick={increaseQuantityCount}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="purchasing-btns d-flex gap-2">
                      <div className="buy-now text-center d-flex align-items-center justify-content-center">
                        <button
                          onClick={buyNow}
                          className="text-light text-decoration-none outline-none border-0 bg-transparent"
                        >
                          Buy Now
                        </button>
                      </div>
                      <div className="add-to-cart text-center d-flex align-items-center justify-content-center">
                        <button
                          className="text-light outline-none bg-transparent border-0 "
                          onClick={addToCartProducts}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="delivery">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="delivery-title">Delivery</span>
                  <img src={Info} alt="Time" className="info-logo" />
                </div>
                <div className="d-flex align-items-center justify-content-between delivery-location">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={Location}
                      alt="Location"
                      className="location-logo"
                    />
                    <span className="deliver-subtitles deliver-subtitles-location">
                      Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad
                    </span>
                  </div>
                  <button>CHANGE</button>
                </div>

                <div className="d-flex align-items-center gap-2 product-detail-payment-methods">
                  <img src={Cash} alt="COD" className="cash-on-delivery" />
                  <span className="deliver-subtitles">
                    Cash On Delivery Available
                  </span>
                </div>
              </div>
              <div className="service">
                <div className="service d-flex -align-items-center justify-content-between">
                  <span className="service-title">Service</span>
                  <img src={Info} alt="Info Img" className="info-logo" />
                </div>
                <div className="d-flex gap-2 pb-2">
                  <img
                    src={Trustedbrand}
                    alt="Trusted Brand"
                    className="trusted-brand-logo"
                  />
                  <span className="service-subtitles">
                    100% Authentic From Trusted Brand
                  </span>
                </div>

                <div className="d-flex gap-2">
                  <img
                    src={Warranty}
                    alt="Warrant Img"
                    className="warranty-logo"
                  />
                  <span className="service-subtitles">
                    Warranty Not available
                  </span>
                </div>
              </div>
              <div className="sold-by">
                <div>
                  <div>
                    <span className="sold-by-title">Sold by</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt-1">
                    <p className="product-detail-seller-name">CONTROL</p>

                    <div className="d-flex gap-1">
                      <img src={Chat} alt="Chat Logo" className="chat-logo" />
                      <span className="chat-title">CHAT</span>
                    </div>
                  </div>
                </div>
                <table className="product-detail-table">
                  <tbody>
                    <tr>
                      <td className="border-left-0">
                        <div style={{ padding: "0px 7px" }}>
                          <span>
                            Positive Seller
                            <br /> Ratings
                          </span>
                          <p className="pt-3">88%</p>
                        </div>
                      </td>
                      <td>
                        <div style={{ padding: "0px 7px" }}>
                          <span>Ship On Time</span>
                          <p className="not-enough-data pt-3">
                            not enough data
                          </p>
                        </div>
                      </td>
                      <td className="border-right-0">
                        <div style={{ padding: "0px 7px" }}>
                          <span>
                            Chat Response
                            <br /> Rate
                          </span>
                          <p className="pt-3">10%</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 bg-seconday"></div>
            <div className="col-12 mt-3">
              <p className="rating-reviews-title">Ratings & Reviews</p>
              <div className="ratings-counter d-flex">
                <span>This product has no reviews.</span>
                {/* <div>
                  <div className="rating-imgs">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                  <div className="individal-rate-counting">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={{ background: "#f5f5f5" }}>
        <FooterLinks />
      </div>
    </>
  );
};

export default ProductDetail;
