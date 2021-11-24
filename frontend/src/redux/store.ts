import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailReducer } from "./reducers/productReducer"
import { cargoteryReducer } from './reducers/cargoteryReducer';

const reducer = combineReducers({
  productList: productListReducer,
  cargoteryList: cargoteryReducer,
  productDetails: productDetailReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store