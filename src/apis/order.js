import req from "./base";

const createOrder = (payload) => req.post("/order/create", payload);

const getOrder = (id) => req.get("/order", { id });

export { createOrder, getOrder };
