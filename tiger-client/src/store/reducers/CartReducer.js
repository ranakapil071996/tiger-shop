import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_PRODUCT } from '../actions/types';

const initialState = {
  cart: []
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const tempCart = { ...state, cart: [...state.cart, action.payload] };
      setCart(tempCart);
      return tempCart;
    case LOAD_PRODUCT:
      const tempLoadCart = { ...state, cart: action.payload };
      setCart(tempLoadCart);
      return tempLoadCart;
    case REMOVE_PRODUCT:
      const tempCartRemove = {
        ...state,
        cart: state.cart.filter(
          (item) => item.productId !== action.payload.productId
        )
      };
      setCart(tempCartRemove);
      return tempCartRemove;
    default:
      return state;
  }
};

const setCart = (cart) => localStorage.setItem('cart', cart);

export default CartReducer;
