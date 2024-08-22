import React, { useEffect, useState } from "react";
import Promotions from "./Filterlists/Promotions";
import Category from "./Filterlists/Category";
import Price from "./Filterlists/Price";
import { Rating } from "./Filterlists/Rating";
import Location from "./Filterlists/Location";
import Size from "./Filterlists/Size";
import Warrentytype from "./Filterlists/Warrentytype";
import Services from "./Filterlists/Services";
import axios from "axios";
const Filters = ({ categoryName }: { categoryName: string }) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const categoryID = params.get("id");
  const [brands, setBrand] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);
  useEffect(() => {
    axios.get("products_two.json").then((data) => {
      const fetchedData = data.data;
      const getBrands = [];
      const getColors = [];
      for (let i = 0; i < fetchedData.length; i++) {
        if (fetchedData[i].category == categoryID) {
          getBrands.push(fetchedData[i].brand);
          getColors.push(fetchedData[i].color);
        }
      }
      const removedDuplicateBrands: any[] = Array.from(new Set(getBrands));
      const removedDuplicateColors: any[] = Array.from(new Set(getColors));
      setBrand(removedDuplicateBrands);
      setColors(removedDuplicateColors);
    });
  }, []);

  return (
    <div>
      <p id="filters-list-heading">Filters</p>
      <div className="mt-2">
        <Promotions />
      </div>
      <div className="mt-4">
        <Category />
      </div>
      <div className="mt-4">
        <div>
          <h5 className="productlist-filters-title">Brand</h5>
          <div className="brands-list">
            <div className="brands d-flex align-items-center gap-2 align-items-center flex-wrap">
              {brands.map((item, key) => (
                <div key={key} className="d-flex align-items-center gap-1">
                  {" "}
                  <input type="checkbox" id={item} />
                  <label htmlFor={item} className="cursor-pointer">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <h5 className="productlist-filters-title">Color</h5>
          <div className="colors-list d-flex flex-wrap gap-2">
            {colors.map((item, key) => (
              <div className="colors cursor-pointer">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="mt-4">
        <Price />
      </div>
      <div className="mt-4">
        <Rating />
      </div> */}
      <div className="mt-4">
        <Location />
      </div>
      {/* <div className="mt-4">
        <Size />
      </div>
      <div className="mt-4">
        <Warrentytype />
      </div>
      <div className="mt-4">
        <Services />
      </div> */}
    </div>
  );
};

export default Filters;
