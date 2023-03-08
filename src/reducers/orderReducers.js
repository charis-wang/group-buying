import { ADD_ORDER, SET_ORDER_STATUS } from "../actions/types";

const initState = {
  orderId: "",
  initiator: "",
  shop: "",
  orderDeadline: "",
  status: "",
};

export default function orderReducers(state = initState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {
        orderId: action.payload._id,
        initiator: action.payload.initiator,
        shop: action.payload.shop.shopName,
        orderDeadline: action.payload.orderDeadline,
        status: action.payload.status,
      };
    case SET_ORDER_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
}
