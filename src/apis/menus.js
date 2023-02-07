import userRequest from "./base";

const get_menu = (id) =>
  userRequest.get("/get_menu", {
    params: {
      id,
    },
  });

export { get_menu };
