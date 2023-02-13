import _ from "lodash";
import { CREATE_SHOP, EDIT_SHOP } from "../actions/types";

const initState = {
  shopName: "",
  shopType: "",
  shopPhoneNumber: "",
  shopAddress: "",
  shopInfo: "",
};

export default function shopReducers(state = initState, action) {
  switch (action.type) {
    case CREATE_SHOP:
      return { ...action.payload };
    case EDIT_SHOP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
