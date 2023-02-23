import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT, ADD_MESSAGE } from "./types";
import {
  signUpForAccount,
  loginAccount,
  logoutAccount,
  getAccountInfo,
} from "../apis/account";

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
      await dispatch({
        type: ADD_MESSAGE,
        payload: {
          msg: `Hi, ${response.data.info.username} : you login successfully!`,
          variant: "success",
        },
      });
    }
  } catch (error) {
    if (error.response.status) {
      await dispatch({
        type: ADD_MESSAGE,
        payload: { msg: error.response.data.message, variant: "error" },
      });
    }
  }
};

export const logout = () => async (dispatch, getState) => {
  await dispatch({
    type: LOGOUT_ACCOUNT,
  });
  await dispatch({
    type: ADD_MESSAGE,
    payload: {
      msg: `Hi, you logout successfully!`,
      variant: "success",
    },
  });
  await logoutAccount();
};

export const getInfo = () => async (dispatch, getState) => {
  try {
    const response = await getAccountInfo();

    if (response.data.username) {
      await dispatch({
        type: LOGIN_ACCOUNT,
        payload: response.data,
      });
    }
  } catch (error) {
    if (error.response.status !== 401) {
      await dispatch({
        type: ADD_MESSAGE,
        payload: {
          msg: error.response.data.error,
          variant: "error",
        },
      });
    }
  }
};
