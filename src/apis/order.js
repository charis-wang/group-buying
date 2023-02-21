import userRequest from "./base";

const createOrder = (formValues) =>
  userRequest.post("/order/create", formValues);

export { createOrder };
