import React, { useEffect, useState } from "react";
import Promotions from "./Filterlists/Promotions";
import Category from "./Filterlists/Category";
import Price from "./Filterlists/Price";
import { Rating } from "./Filterlists/Rating";
import Location from "./Filterlists/Location";
import Size from "./Filterlists/Size";
import Warrentytype from "./Filterlists/Warrentytype";
import Services from "./Filterlists/Services";
import { ProductListsFilterContext } from "./context/FilterContext";
const Filters = ({
  brandsList,
  colorList,
  updateProducts,
  categoryFilteredProducts,
}: {
  brandsList: any[];
  colorList: string[];
  updateProducts: any;
  categoryFilteredProducts: any[];
}) => {
  const [selectedBrands, setSelectedBrands] = useState<any[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const brandFilter = (event: any) => {
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, event.target.value]);
    } else {
      setSelectedBrands(
        selectedBrands.filter((brand) => brand !== event.target.value)
      );
    }
  };
  const handleColorFilter = (event: any) => {
    if (event.target.checked) {
      setSelectedColors([...selectedColors, event.target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== event.target.value)
      );
    }
  };
  useEffect(() => {
    let filterData: any[] = categoryFilteredProducts;
    if (selectedBrands.length > 0) {
      filterData = categoryFilteredProducts.filter((product) => {
        return selectedBrands.includes(product.brand);
      });
    }
    if (selectedColors.length > 0) {
      filterData = categoryFilteredProducts.filter((product) => {
        return selectedColors.includes(product.color);
      });
    }
    updateProducts(filterData);
  }, [selectedBrands, selectedColors]);
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
              {brandsList.map((item, key) => (
                <div key={key} className="d-flex align-items-center gap-1">
                  {" "}
                  <input
                    type="checkbox"
                    id={item}
                    onChange={brandFilter}
                    value={item}
                  />
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
            {colorList.map((item, key) => (
              <div
                className="cursor-pointer d-flex align-items-center gap-1"
                key={key}
              >
                <input
                  type="checkbox"
                  value={item}
                  id={item}
                  onChange={handleColorFilter}
                />
                <label htmlFor={item} className="cursor-pointer">
                  {item}
                </label>
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
