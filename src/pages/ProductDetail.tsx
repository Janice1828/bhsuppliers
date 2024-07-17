import React from "react";
import Navbar from "../components/Navbar";
import FooterLinks from "../components/FooterLinks";

const ProductDetail = () => {
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
                  <img src="" alt="Product Image" />
                  <div className="d-flex gap-2">
                    <img src="" alt="Img 1" />
                    <img src="" alt="Img 2" />
                    <img src="" alt="Img 3" />
                  </div>
                </div>
                <div>
                  <h2>
                    Excellent Quality Random Colour Bath Gloves For Unisexual
                  </h2>
                  <div className="product-detail-rating d-flex align-items-center gap-2">
                    <img src="" alt="Rating Img" />
                    <span className="productDetail-rating-no">1 Ratings</span>
                  </div>
                  <div className="productDetail-brand">
                    <span>Brand: No Brand</span>
                  </div>
                  <div className="border"></div>
                  <div className="productDetail-price">
                    <span className="price">RS. 1,150</span>
                  </div>
                  <div className="productDetail-promotions">
                    <span>Promotions</span>
                    <img src="" alt="Promotion Img" />
                  </div>
                  <div className="productDetail-purchasing-qty">
                    <span>Quantity</span>
                    <div className="d-flex align-items-center gap-1">
                      <button>-</button>
                      <span className="productDetail-qty">1</span>
                      <button>+</button>
                    </div>
                    <div className="purchasing-btns">
                      <div className="buy-now">Buy Now</div>
                      <div className="add-to-cart">Add To Cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="delivery">
                <div>
                  <span>Delivery</span>
                  <img src="" alt="Time" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="d-flex align-items-center gap-2">
                    <img src="" alt="" />
                    <span>
                      Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad
                    </span>
                  </p>
                  <button>CHANGE</button>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="d-flex align-items-center gap-2">
                    <img src="" alt="" />
                    <span></span>
                  </p>
                  <span>Rs.70</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="d-flex align-items-center gap-2">
                    <img src="" alt="" />
                    <span></span>
                  </p>
                  <span>Rs.70</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <img src="" alt="" />
                  <span>Cash On Delivery Available</span>
                </div>
              </div>
              <div className="service">
                <div className="service d-flex -align-items-center justify-content-between">
                  <span>Service</span>
                  <img src="" alt="Service Img" />
                </div>
                <div className="d-flex gap-2">
                  <img src="" alt="" />
                  <div>
                    <p>100% Authentic From Trusted Brand</p>
                    <span>or Get 2x Your Money Back</span>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <img src="" alt="" />
                  <div>
                    <p>14 days free & easy return</p>
                    <span>Change of mind is not applicable</span>
                  </div>
                </div>
                <div className="d-flex gao-2">
                  <img src="" alt="Warrant Img" />
                  <span>Warranty Not available</span>
                </div>
              </div>
              <div className="sold-by">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>Sold by</span>
                    <p>CONTROL</p>
                    <img src="" alt="Mall" />
                  </div>
                  <div>
                    <img src="" alt="Chat Logo" />
                    <span>CHAT</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <span>Positive Seller Ratings</span>
                    <h5>91%</h5>
                  </div>
                  <div>
                    <span>Ship on Time</span>
                    <h5>91%</h5>
                  </div>
                  <div>
                    <span>Chat Response Rate</span>
                    <h5>64%</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 bg-seconday"></div>
            <div className="col-10">
              <p>Ratings & Reviews</p>
              <div className="ratings-counter d-flex">
                <div>
                  <p className="d-flex gap-2">
                    <h4>4.9</h4>
                    <img src="" alt="" />
                  </p>
                  <img src="" alt="" />
                  <span>9 Ratings</span>
                </div>
                <div>
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
                </div>
              </div>
            </div>
            <div className="col-2">
              <h5>People Who Viewed This....</h5>
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p>Rs. 409</p>
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
