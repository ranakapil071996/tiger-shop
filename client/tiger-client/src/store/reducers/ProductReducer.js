import { GET_PRODUCTS } from '../actions/types';

const initialState = {
  products: []
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
