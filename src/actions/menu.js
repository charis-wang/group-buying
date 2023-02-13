import { FETCH_MENU, ADD_MENU, DELETE_MENU, EDIT_MENU } from "./types";
import { getMenuByShopId } from "../apis/menus";

export const FetchMenu = (shopId) => (dispatch, getState) => {
  getMenuByShopId(shopId).then((res) =>
    dispatch({ type: FETCH_MENU, payload: res.data })
  );
};

export const CreateMenu = (formValues) => (dispatch, getState) => {
  dispatch({
    type: ADD_MENU,
    payload: formValues,
  });
};

export const EditMenu = (formValues) => (dispatch, getState) => {
  dispatch({
    type: EDIT_MENU,
    payload: formValues,
  });
};

export const DeleteMenu = (formValues) => (dispatch) => {
  dispatch({
    type: DELETE_MENU,
    payload: formValues,
  });
};
