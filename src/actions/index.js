import { ADD_CART_ITEM, EDIT_CART_ITEM } from "./types";
import { CREATE_MENU, DELETE_MENU } from "./types";
import { CREATE_SHOP } from "./types";

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

export const CreateMenu = (formValues) => (dispatch, getState) => {
  dispatch({
    type: CREATE_MENU,
    payload: formValues,
  });
};

export const DeleteMenu = (formValues) => (dispatch) => {
  dispatch({
    type: DELETE_MENU,
    payload: formValues,
  });
};

export const CreateShop = (formValues) => (dispatch, getState) => {
  dispatch({
    type: CREATE_SHOP,
    payload: formValues,
  });
};
