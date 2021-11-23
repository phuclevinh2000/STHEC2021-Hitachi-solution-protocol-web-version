import { combineReducers } from 'redux';
import { productListReducer } from './productReducer';

const reducer = () =>
  combineReducers({
    productListReducer,
  });

export default reducer;
