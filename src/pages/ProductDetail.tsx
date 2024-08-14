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
const ProductDetail = () => {
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
  console.log(productDetail);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="product-detail-container">
        <div className="w-75 m-auto">
          <p className="productdetail-filter-title">Fashion</p>
          <div className="row">
            <div className="col-9">
              <div className="d-flex gap-2">
                <div className="">
                  <div className="productDetail-productImg">
                    <img src={productDetail.images} alt="Product Image" />
                  </div>
                  <div className="d-flex gap-2 detailed-img-lists">
                    <img src={""} alt="Img 1" />
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
                        <button className="productDetail-qty-btns">-</button>
                        <span className="productDetail-qty">1</span>
                        <button className="productDetail-qty-btns">+</button>
                      </div>
                    </div>
                    <div className="purchasing-btns d-flex gap-2">
                      <div className="buy-now text-center d-flex align-items-center justify-content-center">
                        <Link
                          to="#"
                          className="text-light text-decoration-none"
                        >
                          Buy Now
                        </Link>
                      </div>
                      <div className="add-to-cart text-center d-flex align-items-center justify-content-center">
                        <Link
                          to="#"
                          className="text-light text-decoration-none"
                        >
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
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
                    <span className="deliver-subtitles">
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
                        <span>Positive Seller Ratings</span>
                        <p className="pt-3">88%</p>
                      </td>
                      <td>
                        <span>Ship On Time</span>
                        <p className="not-enough-data pt-3">not enough data</p>
                      </td>
                      <td className="border-right-0">
                        <span>Chat Response Rate</span>
                        <p className="pt-3">10%</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 bg-seconday"></div>
            <div className="col-10">
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
            <div className="col-2">
              <h5 className="people-who-viewed-this">
                People Who Viewed This....
              </h5>
              <div className="card who-viewed-this-card">
                <img src={diaper} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Mamy Poko Pants</p>
                  <p className="who-viewed-this-price">Rs. 409</p>
                  <img src="" alt="" />
                </div>
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
