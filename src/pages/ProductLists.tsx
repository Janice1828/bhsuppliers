import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/home/Filter";
import Filters from "../components/ProductLists/Filters";
import Products from "../components/ProductLists/Products";
import { ProductListsContext } from "../components/ProductLists/context/FilterContext";
import { useState } from "react";
const ProductLists = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const categoryName = params ? params.get("categoryname") : "";
  const [displayingProducts, setDisplayingProducts] = useState<any[]>([]);

  return (
    <>
      <Navbar />
      <ProductListsContext.Provider
        value={{ displayingProducts, setDisplayingProducts }}
      >
        <div className="row m-auto w-75">
          <div className="col-12">
            <p className="py-2 filter-pages-list">
              Home /{" "}
              <span className="text-primary opacity-75">{categoryName}</span>
            </p>
          </div>
          <div className="col-3">
            <Filters categoryName={categoryName ? categoryName : ""} />
          </div>
          <div className="col-9">
            <Products />
          </div>
        </div>
      </ProductListsContext.Provider>
      <Footer />
    </>
  );
};

export default ProductLists;
