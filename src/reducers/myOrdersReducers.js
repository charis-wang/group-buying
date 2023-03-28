import { ADD_MY_ORDERS } from "../actions/types";

const initState = {
  orderIds: [],
  status: "",
};

export default function myOrdersReducers(state = initState, action) {
  switch (action.type) {
    case ADD_MY_ORDERS:
      return {
        orderIds: action.payload,
      };
    default:
      return state;
  }
}
