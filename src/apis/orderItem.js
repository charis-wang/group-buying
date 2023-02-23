import req from "./base";

const createOrderItems = (payload) => req.post("/order/orderItem", payload);

// const getOrder = (id) => req.get("/order", { id });

export { createOrderItems };
