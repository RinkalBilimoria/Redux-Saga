import { combineReducers } from "redux";
import productReducer from "./Product/reducers";
import cartReducer from "./Cart/reducers";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
