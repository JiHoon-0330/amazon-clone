import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const CartScreen = props => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

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
