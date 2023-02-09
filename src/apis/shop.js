import userRequest from "./base";

const postShop = (formValues) => userRequest.post("/shopWithMenu", formValues);

export { postShop };
