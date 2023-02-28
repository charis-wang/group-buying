import { ADD_MESSAGE } from "./types";

const makeAction = (variant) => (msg) => (dispatch) =>
  dispatch({ type: ADD_MESSAGE, payload: { msg: msg, variant: variant } });

export const successMsg = makeAction("success");
export const errorMsg = makeAction("error");
