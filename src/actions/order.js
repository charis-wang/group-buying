import { FETCH_ORDER_ITEMS, ADD_MENU, ADD_ORDER } from "./types";
import { createOrder, getOrder, getOrderItem } from "../apis/order";
import { handleDefaultError } from "./base";

export const AddOrder = (formValues) => (dispatch) =>
  createOrder(formValues)
    .then(() => dispatch({ type: ADD_ORDER, payload: formValues }))
    .catch((error) => handleDefaultError(error, dispatch));

export const FetchOrder = (orderId) => (dispatch) =>
  getOrder(orderId)
    .then((res) => {
      dispatch({ type: ADD_ORDER, payload: res.data.orderData });

      Object.values(res.data.menuData).map((group) =>
        group.map((menuItem) => dispatch({ type: ADD_MENU, payload: menuItem }))
      );
    })
    .catch((error) => handleDefaultError(error, dispatch));

export const FetchOrderInfo = (orderId) => (dispatch) => {
  getOrder(orderId)
    .then((res) => dispatch({ type: ADD_ORDER, payload: res.data.orderData }))
    .catch((error) => handleDefaultError(error, dispatch));

  getOrderItem(orderId)
    .then((res) =>
      dispatch({ type: FETCH_ORDER_ITEMS, payload: res.data.orderItems })
    )
    .catch((error) => handleDefaultError(error, dispatch));
};
