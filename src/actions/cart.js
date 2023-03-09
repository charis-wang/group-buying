import { ADD_CART_ITEM, FETCH_CART_ITEMS, UPDATE_CART_ITEMS } from "./types";
import { createOrderItems, getOrderItem } from "../apis/order";
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

export const EditCartItem = (formValues) => (dispatch, getState) => {
  const { order } = getState();
  return createOrderItems({ orderId: order.orderId, orderItems: formValues })
    .then(() => {
      dispatch({ type: UPDATE_CART_ITEMS, payload: formValues });
      return true;
    })
    .catch((error) => handleDefaultError(error, dispatch));
};

export const FetchCartItem = (orderId) => (dispatch) =>
  getOrderItem(orderId, true)
    .then((res) => {
      dispatch({ type: FETCH_CART_ITEMS, payload: res.data.orderItems });
    })
    .catch((error) => handleDefaultError(error, dispatch));
