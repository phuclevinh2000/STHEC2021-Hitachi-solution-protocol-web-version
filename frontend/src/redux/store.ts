import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailReducer } from "./reducers/productReducer"
import { cargoteryReducer } from './reducers/cargoteryReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer : any = combineReducers({
  productList: productListReducer,
  cargoteryList: cargoteryReducer,
  productDetails: productDetailReducer,
  cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems')!)
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store