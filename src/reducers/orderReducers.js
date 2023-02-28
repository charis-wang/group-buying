import { ADD_ORDER } from "../actions/types";

const initState = {
  orderId: "",
  initiator: "",
  shop: "",
  orderDeadline: "",
};

export default function orderReducers(state = initState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {
        orderId: action.payload._id,
        initiator: action.payload.initiator,
        shop: action.payload.shop.shopName,
        orderDeadline: action.payload.orderDeadline,
      };
    default:
      return state;
  }
}
