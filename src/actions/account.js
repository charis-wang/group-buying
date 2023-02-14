import { CREATE_ACCOUNT, LOGIN_ACCOUNT } from "./types";
import { signUpForAccount, loginAccount } from "../apis/account";

export const signUp = (userInfo) => async (dispatch, getState) => {
  await dispatch({
    type: CREATE_ACCOUNT,
    payload: userInfo,
  });
  await signUpForAccount(userInfo);
};

export const login = (userInfo) => async (dispatch, getState) => {
  await dispatch({
    type: LOGIN_ACCOUNT,
    payload: userInfo,
  });
  await loginAccount(userInfo);
  console.log("login successfully");
};
