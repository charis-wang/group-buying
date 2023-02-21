import { CREATE_ORDER } from "./types";
import { createOrder } from "../apis/order";

export const CreateOrder = (formValues) => async (dispatch, getState) => {
  dispatch({ type: CREATE_ORDER, payload: formValues });

  return createOrder(formValues);
};
