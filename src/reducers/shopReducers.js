import _ from "lodash";
import { CREATE_SHOP } from "../actions/types";

export default function shopReducers(state = [], action) {
  switch (action.type) {
    case CREATE_SHOP:
      return { ...state, [action.payload.shopName]: action.payload };

    default:
      return state;
  }
}
