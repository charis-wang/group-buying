import _ from "lodash";
import { ADD_CART_ITEM, EDIT_CART_ITEM } from "../actions/types";

export default function cartReducers(state = {}, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      const key = action.payload.id;
      if (state[key]) {
        state[key].amount += action.payload.amount;
        return { ...state };
      }
      return { ...state, [key]: action.payload };

    case EDIT_CART_ITEM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
