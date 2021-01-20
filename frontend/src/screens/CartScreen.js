import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CartScreen = props => {
  const { id } = useParams();
  const { search } = props.location;
  let qty = null;
  if (search) {
    search
      .substring(1)
      .split("&")
      .forEach(param => {
        param.split("=")[0] === "qty" && (qty = Number(param.split("=")[1]));
      });
  }

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {id} Qty : {qty}
      </p>
    </div>
  );
};

export default CartScreen;
