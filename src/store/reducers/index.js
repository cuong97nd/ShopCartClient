import { combineReducers } from "redux";
import productsReducer from "./products";
import cartReducer from "./cart";
import userReducer from "./user";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer
});

export default rootReducer;
