import { FETCH_ORDER_ITEMS, SET_PAYMENT_STATUS } from "../actions/types";

export default function orderItemReducers(state = [], action) {
  switch (action.type) {
    case FETCH_ORDER_ITEMS:
      return action.payload;
    case SET_PAYMENT_STATUS:
      const newState = state.map((orderItem) => {
        const newOrderItem = { ...orderItem };
        if (action.payload.buyer === orderItem.buyer) {
          newOrderItem.status = action.payload.status;
        }
        return newOrderItem;
      });
      return newState;
    default:
      return state;
  }
}
