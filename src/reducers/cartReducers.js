import { ADD_CART_ITEM } from "../actions/types";

export default function cartReducers(state = [], action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, [action.payload.itemId]: action.payload };

    default:
      return state;
  }
}
