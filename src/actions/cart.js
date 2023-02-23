import { ADD_CART_ITEM, EDIT_CART_ITEM, ADD_MESSAGE } from "./types";
import { createOrderItems } from "../apis/orderItem";

export const AddCartItem = (formValues) => (dispatch, getState) => {
  dispatch({
    type: ADD_CART_ITEM,
    payload: formValues,
  });
};

export const EditCartItem = (formValues) => async (dispatch) => {
  try {
    await dispatch({
      type: EDIT_CART_ITEM,
      payload: formValues,
    });

    const response = await createOrderItems(formValues);
  } catch (error) {
    if (error.response.status === 401) {
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
