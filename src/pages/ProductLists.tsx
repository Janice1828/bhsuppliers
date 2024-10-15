import React, { useEffect } from "react";
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
  const categoryID: any = params ? params.get("id") : "";
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [displayingData, setDisplayingData] = useState<any[]>([]);
  useEffect(() => {
    fetch("products_two.json")
      .then((res) => res.json())
      .then((data) => {
        let categoryFilteredData: any[] = data.filter((product: any) => {
          return product.category == categoryID;
        });
        setFilteredProducts(categoryFilteredData);
        setDisplayingData(categoryFilteredData);
        let getBrands: string[] = [];
        let getColors: string[] = [];
        for (let i = 0; i < categoryFilteredData.length; i++) {
          getBrands.push(categoryFilteredData[i].brand);
          getColors.push(categoryFilteredData[i].color);
        }
        const uniqueBrands: string[] = Array.from(new Set(getBrands));
        const uniqueColors: string[] = Array.from(new Set(getColors));
        setBrands(uniqueBrands);
        setColors(uniqueColors);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="row m-auto w-75">
        <div className="col-12">
          <p className="py-2 filter-pages-list">
            Home /{" "}
            <span className="text-primary opacity-75">{categoryName}</span>
          </p>
        </div>
        <div className="col-3">
          <Filters
            brandsList={brands}
            colorList={colors}
            updateProducts={setDisplayingData}
            categoryFilteredProducts={filteredProducts}
          />
        </div>
        <div className="col-9">
          <Products data={displayingData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductLists;
