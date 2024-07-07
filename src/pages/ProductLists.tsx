import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/home/Filter";
import Filters from "../components/ProductLists/Filters";
import Products from "../components/ProductLists/Products";

const ProductLists = () => {
  return (
    <>
      <Navbar />
      <div className="row mx-0">
        <div className="col-12">
          <p>Home/Motors/Motorcycle</p>
        </div>
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-9">
          <Products />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductLists;
