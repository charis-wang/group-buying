import { CREATE_ACCOUNT } from "./types";
import { signUpForAccount } from "../apis/account";

export const signUp = (userInfo) => async (dispatch, getState) => {
  await dispatch({
    type: CREATE_ACCOUNT,
    payload: userInfo,
  });
  await signUpForAccount(userInfo);
};
