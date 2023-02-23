import req from "./base";

const getShop = (id) => req.get("/shop", { id });

const saveShopWithMenu = (payload) => req.post("/shop_with_menu", payload);

const deleteShopWithMenu = (id) => req.delete("/shop_with_menu", { id });

const getShops = () => req.get("/shops");

const fetchShops = () => req.post("/shop/showAll");

export { getShop, saveShopWithMenu, deleteShopWithMenu, getShops, fetchShops };
