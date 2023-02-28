import { getShop, saveShopWithMenu, deleteShopWithMenu } from "../apis/shop";
import { CREATE_SHOP, EDIT_SHOP } from "./types";
import { handleDefaultError } from "./base";

export const FetchShop = (shopId) => (dispatch) =>
  getShop(shopId)
    .then((res) => dispatch({ type: CREATE_SHOP, payload: res.data }))
    .catch((error) => handleDefaultError(error, dispatch));

export const EditShop = (formValues) => (dispatch) =>
  dispatch({ type: EDIT_SHOP, payload: formValues });

export const SaveShopAndMenu = () => (dispatch, getState) => {
  const { shop, menu } = getState();
  return saveShopWithMenu({ shop, menu }).catch((error) =>
    handleDefaultError(error, dispatch)
  );
};

export const DeleteShopAndMenu = (shopId) => (dispatch) =>
  deleteShopWithMenu(shopId).catch((error) =>
    handleDefaultError(error, dispatch)
  );
