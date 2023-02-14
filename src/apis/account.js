import userRequest from "./base";

const signUpForAccount = (userInfo) =>
  userRequest.post("/account/signup", userInfo);

export { signUpForAccount };
