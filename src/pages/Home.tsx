import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/home/Products";
import Filter from "../components/home/Filter";
import Discount from "../components/home/Discount";
import Categories from "../components/home/Categories";
import Flashsale from "../components/home/Flashsale";
import Darazmall from "../components/home/Darazmall";
import Sale from "../components/home/Sale";
import { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";
const Home = () => {
  const [displayingProducts, setdisplayingProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    axios.get("products_two.json").then((data) => {
      setdisplayingProducts(data.data);
    });
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const getDiscountedPrice = (
    discountedPercentage: number,
    originalPrice: number
  ) => {
    let discountPrice = (discountedPercentage / 100) * originalPrice;
    return Number(discountPrice.toFixed(2));
  };
  return (
    <>
      <div className="home-container">
        <div className="navbar pt-0">
          <Navbar />
        </div>
        <div className="products row w-75 m-auto pt-1">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9 p-0">
            <Sale />
          </div>
          <div className="col-12 pt-3 pb-3">
            <Discount />
          </div>
          <div className="col-12 row">
            <h3 className="home-headings col-12 px-0">Categories</h3>
            <div className="col-12 row" style={{ gap: "1px" }}>
              {categories.map((category) => (
                <Categories
                  key={category.id}
                  categoryName={category.name}
                  img={category.image}
                  id={category.id}
                />
              ))}
            </div>
          </div>
          {/* <div className="col-12 mt-3">
            <Flashsale />
          </div> */}
          {/* <div className="col-12 mt-3">
            <Darazmall />
          </div> */}
          <div className="col-12 mt-3 row">
            <h3 className="home-headings px-0">Just For You</h3>
            <div className="col-12 row gy-3 gx-2 mt-0">
              {displayingProducts.map((product) => (
                <Products
                  price={product.price}
                  key={product.id}
                  productName={product.title}
                  img={product.images}
                  id={product.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
