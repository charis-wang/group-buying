import { CREATE_ACCOUNT } from "../actions/types";

const initState = {
  username: "",
  password: "",
  email: "",
  phoneNumber: "",
};

export default function accountReducers(state = initState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return { ...action.payload };

    default:
      return state;
  }
}
