import { ADD_CART_ITEM, EDIT_CART_ITEM } from "./types";

export const AddCartItem = (formValues) => (dispatch, getState) => {
  dispatch({
    type: ADD_CART_ITEM,
    payload: formValues,
  });
};

export const EditCartItem = (formValues) => (dispatch) => {
  dispatch({
    type: EDIT_CART_ITEM,
    payload: formValues,
  });
};
