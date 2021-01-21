import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      return {
        ...state,
        cartItems: { ...state.cartItems, [item.product]: { ...item } }
      };
    case CART_REMOVE_ITEM:
      const id = action.payload;
      delete state.cartItems[id];
      return {
        ...state,
        cartItems: {
          ...state.cartItems
        }
      };
    default:
      return state;
  }
};
