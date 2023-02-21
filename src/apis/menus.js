import userRequest from "./base";
import { makeParams } from "./utils";

const getMenuByShopId = (shopId) =>
  userRequest.get("/menu", makeParams({ shopId }));

export { getMenuByShopId };
