import { store } from "../store";
import { getShop, saveShopWithMenu, deleteShopWithMenu } from "../apis/shop";
import { CREATE_SHOP, EDIT_SHOP } from "./types";

export const FetchShop = (shopId) => (dispatch, getState) => {
  getShop(shopId).then((res) =>
    dispatch({ type: CREATE_SHOP, payload: res.data })
  );
};

export const EditShop = (formValues) => (dispatch, getState) => {
  dispatch({ type: EDIT_SHOP, payload: formValues });
};

export const SaveShopAndMenu = (formValues) => (dispatch, getState) => {
  const { shop, menu } = store.getState();
  return saveShopWithMenu({ shop, menu });
};

export const DeleteShopAndMenu = (shopId) => (dispatch, getState) => {
  deleteShopWithMenu(shopId);
};
