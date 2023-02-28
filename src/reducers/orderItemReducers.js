import { FETCH_ORDER_ITEMS } from "../actions/types";

export default function orderItemReducers(state = [], action) {
  switch (action.type) {
    case FETCH_ORDER_ITEMS:
      return action.payload;

    default:
      return state;
  }
}
