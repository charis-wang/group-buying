import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT } from "./types";
import {
  signUpForAccount,
  loginAccount,
  logoutAccount,
  getAccountInfo,
} from "../apis/account";
import { successMsg } from "./message";
import { handleDefaultError } from "./base";

export const signUp = (userInfo) => async (dispatch) =>
  signUpForAccount(userInfo)
    .then(() => {
      alert("register success, please login!!!!!");
      return true;
    })
    .catch((error) => handleDefaultError(error, dispatch));

export const login = (userInfo) => async (dispatch) =>
  loginAccount(userInfo)
    .then((response) => {
      dispatch({ type: LOGIN_ACCOUNT, payload: response.data.info });

      const msg = `Hi, ${response.data.info.username} : you login successfully!`;
      successMsg(msg)(dispatch);
    })
    .catch((error) => handleDefaultError(error, dispatch));

export const logout = () => (dispatch) =>
  logoutAccount()
    .then(() => {
      dispatch({ type: LOGOUT_ACCOUNT });
      successMsg("Hi, you logout successfully!")(dispatch);
    })
    .catch((error) => handleDefaultError(error, dispatch));

export const getInfo = () => (dispatch) =>
  getAccountInfo()
    .then((response) => {
      dispatch({ type: LOGIN_ACCOUNT, payload: response.data });
    })
    .catch((error) => {
      if (error.response.status !== 401) throw error;
    })
    .catch((error) => handleDefaultError(error, dispatch));
