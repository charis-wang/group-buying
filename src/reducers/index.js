import { combineReducers } from "redux";

import cartReducers from "./cartReducers";
import menuReducers from "./menuReducers";
import shopReducers from "./shopReducers";

export default combineReducers({
  cart: cartReducers,
  menu: menuReducers,
  shop: shopReducers,
});
