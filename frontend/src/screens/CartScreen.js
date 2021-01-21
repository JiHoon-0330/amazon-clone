import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

const CartScreen = props => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { search } = props.location;
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
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

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirec=shipping");
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {Object.keys(cartItems).length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {Object.keys(cartItems).map(cartItem => {
              const {
                image,
                name,
                product,
                qty,
                countInStock,
                price
              } = cartItems[cartItem];
              return (
                <li key={product}>
                  <div className="row">
                    <div>
                      <img className="small" src={image} alt={name} />
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${product}`}>{name}</Link>
                    </div>
                    <div>
                      <select
                        value={qty}
                        onChange={e =>
                          dispatch(addToCart(product, Number(e.target.value)))
                        }
                      >
                        {[...Array(countInStock).keys()].map(index => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>${price}</div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal (
                {Object.values(cartItems).reduce((a, c) => a + c.qty, 0)} items)
                : $
                {Object.values(cartItems).reduce(
                  (a, c) => a + c.qty * c.price,
                  0
                )}
              </h2>
            </li>
            <li>
              <button
                className="primary block"
                type="button"
                onClick={checkoutHandler}
                disabled={Object.keys(cartItems).length === 0}
              >
                Proced to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
