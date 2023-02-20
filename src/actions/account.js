import {
  LOGIN_ACCOUNT,
  LOGOUT_ACCOUNT,
  ADD_ALERT_MESSAGE,
  REMOVE_ALERT_MESSAGE,
} from "./types";
import { signUpForAccount, loginAccount, logoutAccount } from "../apis/account";

export const signUp = (userInfo) => async (dispatch, getState) => {
  await signUpForAccount(userInfo);
  alert("register success, please login!!!!!");
};

export const login = (userInfo) => async (dispatch, getState) => {
  try {
    const response = await loginAccount(userInfo);

    if (response.data.success) {
      await dispatch({
        type: LOGIN_ACCOUNT,
        payload: response.data.info,
      });
    }
  } catch (error) {
    if (error.response.status) {
      await dispatch({
        type: ADD_ALERT_MESSAGE,
        payload: error.response.data.message,
      });
    }
  }
};

export const logout = () => async (dispatch, getState) => {
  await dispatch({
    type: LOGOUT_ACCOUNT,
  });
  await logoutAccount();
};

export const resetAlertMessage = () => async (dispatch, getState) => {
  await dispatch({
    type: REMOVE_ALERT_MESSAGE,
  });
};
