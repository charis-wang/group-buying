import {
  FETCH_ORDER_ITEMS,
  ADD_MENU,
  ADD_ORDER,
  SET_PAYMENT_STATUS,
  SET_ORDER_STATUS,
} from "./types";
import {
  createOrder,
  getOrder,
  getOrderItem,
  updateOrderStatus,
  updatePaymentStatus,
} from "../apis/order";
import { successMsg } from "./message";
import { handleDefaultError } from "./base";

export const AddOrder = (formValues) => (dispatch) =>
  createOrder(formValues)
    .then((res) => {
      const id = res.data.id;
      dispatch({
        type: ADD_ORDER,
        payload: { _id: id, ...formValues },
      });
      return id;
    })
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

export const SetPaymentStatus = (value) => (dispatch, getState) => {
  const { order } = getState();
  updatePaymentStatus({
    orderId: order.orderId,
    buyer: value.buyer,
    status: value.status,
  })
    .then(() => dispatch({ type: SET_PAYMENT_STATUS, payload: value }))
    .catch((error) => handleDefaultError(error, dispatch));
};

export const SetOrderStatus = (status) => (dispatch, getState) => {
  const { order } = getState();
  updateOrderStatus(order.orderId, status)
    .then(() => {
      dispatch({ type: SET_ORDER_STATUS, payload: status });
      const msg = `setting order ${status}`;
      successMsg(msg)(dispatch);
    })
    .catch((error) => handleDefaultError(error, dispatch));
};
