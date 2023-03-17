import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT } from "../actions/types";

const initState = {
  username: "",
  email: "",
  phoneNumber: "",
  login: undefined,
};

export default function accountReducers(state = initState, action) {
  switch (action.type) {
    case LOGIN_ACCOUNT:
      return { ...action.payload, login: true };
    case LOGOUT_ACCOUNT:
      return { ...initState, login: false };
    default:
      return state;
  }
}
