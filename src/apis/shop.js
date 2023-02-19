import userRequest from "./base";
import { makeParams } from "./utils";

const getShop = (id) => userRequest.get("/shop", makeParams({ id }));

const saveShopWithMenu = (formValues) =>
  userRequest.post("/shop_with_menu", formValues);

const deleteShopWithMenu = (id) =>
  userRequest.delete("/shop_with_menu", makeParams({ id }));

const getShops = () => userRequest.get("/shops");

export { getShop, saveShopWithMenu, deleteShopWithMenu, getShops };
