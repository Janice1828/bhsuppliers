import React from "react";
import Promotions from "./Filterlists/Promotions";
import Category from "./Filterlists/Category";
import Color from "./Filterlists/Color";
import Price from "./Filterlists/Price";
import { Rating } from "./Filterlists/Rating";
import Location from "./Filterlists/Location";
import Size from "./Filterlists/Size";
import Warrentytype from "./Filterlists/Warrentytype";
import Services from "./Filterlists/Services";
const Filters = () => {
  return (
    <div>
      <h3>Filters</h3>
      <div className="mt-2">
        <Promotions />
      </div>
      <div className="mt-4">
        <Category />
      </div>
      <div className="mt-4">
        <Color />
      </div>
      <div className="mt-4">
        <Price />
      </div>
      <div className="mt-4">
        <Rating />
      </div>
      <div className="mt-4">
        <Location />
      </div>
      <div className="mt-4">
        <Size />
      </div>
      <div className="mt-4">
        <Warrentytype />
      </div>
      <div className="mt-4">
        <Services />
      </div>
    </div>
  );
};

export default Filters;
