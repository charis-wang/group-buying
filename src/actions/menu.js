import { FETCH_MENU, ADD_MENU, DELETE_MENU, EDIT_MENU } from "./types";
import { getMenuByShopId } from "../apis/menus";
import { handleDefaultError } from "./base";

export const FetchMenu = (shopId) => (dispatch) =>
  getMenuByShopId(shopId)
    .then((res) => dispatch({ type: FETCH_MENU, payload: res.data }))
    .catch((error) => handleDefaultError(error, dispatch));

export const CreateMenu = (formValues) => (dispatch) =>
  dispatch({ type: ADD_MENU, payload: formValues });

export const EditMenu = (formValues) => (dispatch) =>
  dispatch({ type: EDIT_MENU, payload: formValues });

export const DeleteMenu = (formValues) => (dispatch) =>
  dispatch({ type: DELETE_MENU, payload: formValues });
