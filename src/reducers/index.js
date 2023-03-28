import { combineReducers } from "redux";

import cartReducers from "./cartReducers";
import menuReducers from "./menuReducers";
import shopReducers from "./shopReducers";
import accountReducers from "./accountReducers";
import messageReducers from "./messageReducers";
import orderReducers from "./orderReducers";
import orderItemReducers from "./orderItemReducers";
import myOrdersReducers from "./myOrdersReducers";

export default combineReducers({
  cart: cartReducers,
  menu: menuReducers,
  shop: shopReducers,
  account: accountReducers,
  message: messageReducers,
  order: orderReducers,
  orderItem: orderItemReducers,
  myOrders: myOrdersReducers,
});
