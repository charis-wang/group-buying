import {
  CREATE_ACCOUNT,
  LOGIN_ACCOUNT,
  LOGOUT_ACCOUNT,
  ADD_ALERT_MESSAGE,
  REMOVE_ALERT_MESSAGE,
} from "../actions/types";

const initState = {
  username: "",
  password: "",
  email: "",
  phoneNumber: "",
  login: false,
};

export default function accountReducers(state = initState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return { ...action.payload };
    case LOGIN_ACCOUNT:
      return {
        ...action.payload,
        login: true,
      };
    case LOGOUT_ACCOUNT:
      return { ...state, login: false };
    case ADD_ALERT_MESSAGE:
      return { ...state, alert: action.payload };
    case REMOVE_ALERT_MESSAGE:
      return { ...state, alert: "" };
    default:
      return state;
  }
}
