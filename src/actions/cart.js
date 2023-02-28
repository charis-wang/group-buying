import { ADD_CART_ITEM, UPDATE_CART_ITEMS } from "./types";
import { createOrderItems } from "../apis/order";
import { handleDefaultError } from "./base";

export const AddCartItem = (formValues) => (dispatch, getState) => {
  const { order } = getState();

  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      ...formValues,
      order: order.orderId,
    },
  });
};

export const EditCartItem = (formValues) => (dispatch) =>
  createOrderItems(formValues)
    .then(() => {
      dispatch({ type: UPDATE_CART_ITEMS, payload: formValues });
      return true;
    })
    .catch((error) => handleDefaultError(error, dispatch));
