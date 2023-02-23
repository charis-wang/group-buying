import req from "./base";

const getMenuByShopId = (shopId) => req.get("/menu", { shopId });

export { getMenuByShopId };
