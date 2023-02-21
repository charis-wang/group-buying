import { CREATE_ORDER } from "../actions/types";

const initState = {
  initiator: "",
  shop: "",
  orderDeadline: "",
};

export default function orderReducers(state = initState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...action.payload };
    default:
      return state;
  }
}
