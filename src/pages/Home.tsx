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
        <div className="navbar pt-0  position-sticky top-0 z-3">
          <Navbar />
        </div>
        <div className="products row w-75 m-auto pt-1">
          <div className="col-md-3">
            <Filter />
          </div>
          <div className="col-md-9 mt-3 mt-md-0 p-0 mb-3">
            <Sale />
          </div>
          <div className="col-12 row gx-0">
            <h3 className="home-headings col-12 px-0 text-yellow">
              Categories
            </h3>
            <div className="col-12 row gx-0 m-0 p-0">
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
          <div className="col-12 mt-3 row gx-0 m-0">
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
