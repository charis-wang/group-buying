import _ from "lodash";
import { ADD_MENU, DELETE_MENU, EDIT_MENU, FETCH_MENU } from "../actions/types";

export default function menuReducers(state = {}, action) {
  const key = (action.payload || {}).groupName;

  // Debugger Message
  if ([ADD_MENU, DELETE_MENU].indexOf(action.type) !== -1) {
    console.log(">>>", action.type);
    console.log("state: ", state);
    console.log("payload: ", action.payload);
  }

  switch (action.type) {
    case FETCH_MENU:
      return { ...action.payload };
    case ADD_MENU:
      return { ...state, [key]: (state[key] || []).concat(action.payload) };
    case EDIT_MENU:
      return { ...state, ...action.payload };
    case DELETE_MENU:
      const filterData = state[key].filter((doc) => doc !== action.payload);

      if (filterData.length === 0) return _.omit(state, key);
      return { ...state, [key]: filterData };
    default:
      return state;
  }
}
