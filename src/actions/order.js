import { ADD_MENU, CREATE_ORDER } from "./types";
import { createOrder, getOrder } from "../apis/order";

export const CreateOrder = (formValues) => async (dispatch, getState) => {
  dispatch({ type: CREATE_ORDER, payload: formValues });

  return createOrder(formValues);
};

export const FetchOrder = (shopId) => (dispatch, getState) => {
  getOrder(shopId).then((res) => {
    dispatch({ type: CREATE_ORDER, payload: res.data.orderData });

    Object.values(res.data.menuData).map((group) =>
      group.map((menuItem) => dispatch({ type: ADD_MENU, payload: menuItem }))
    );
  });
};
