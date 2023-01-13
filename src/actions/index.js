import { ADD_CART_ITEM } from "./types";

export const AddCartItem = (formValues) => (dispatch, getState) => {
  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      itemId: formValues.itemId,
      itemName: formValues.itemName,
      detail: formValues.detail,
      price: formValues.price,
      amount: formValues.amount,
    },
  });
};
