import { combineReducers } from "redux";

//import authReducer from "./authReducer";
import menuReducer from "./menuReducers";

export default combineReducers({
  menu: menuReducer,
});