import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
  cart: CartReducer,
  ui: ProductReducer
});
