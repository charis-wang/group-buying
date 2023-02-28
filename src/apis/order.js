import req from "./base";

const createOrder = (payload) => req.post("/order/create", payload);

const getOrder = (id) => req.get("/order", { id });

const getOrderItem = (id) => req.get("/order/order_item", { id });

const createOrderItems = (payload) => req.post("/order/order_item", payload);

export { createOrder, getOrder, getOrderItem, createOrderItems };
