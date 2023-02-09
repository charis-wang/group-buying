import userRequest from "./base";

const getMenu = (id) =>
  userRequest.get("/getMenu", {
    params: {
      id,
    },
  });

export { getMenu };
