import { ADD_MESSAGE, REMOVE_MESSAGE } from "../actions/types";

const initState = {
  msg: "",
  variant: "",
};

export default function messageReducers(state = initState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...action.payload };
    case REMOVE_MESSAGE:
      return { ...state, alert: "" };
    default:
      return state;
  }
}
