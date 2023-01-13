import _ from "lodash";
import { CREATE_MENU } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_MENU:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
