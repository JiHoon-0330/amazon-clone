import React, { useState } from "react";
import Product from "../components/Product";
import { data } from "../data";

const HomeScreen = props => {
  return (
    <div className="row center">
      {Object.keys(data.products).map(key => {
        console.log(data.products[key]);
        return <Product key={key} product={data.products[key]} />;
      })}
    </div>
  );
};

export default HomeScreen;
