import req from "./base";

const createOrder = (payload) => req.post("/order/create", payload);

const getOrder = (id) => req.get("/order", { id });

const updateOrderStatus = (id, status) =>
  req.get("/order/update", { id, status });

const getOrderItem = (id, personal) =>
  req.get("/order/order_item", { id, personal });

const createOrderItems = (payload) => req.post("/order/order_item", payload);

const updatePaymentStatus = (payload) =>
  req.post("/order/payment_status", payload);

export {
  createOrder,
  getOrder,
  updateOrderStatus,
  getOrderItem,
  createOrderItems,
  updatePaymentStatus,
};
