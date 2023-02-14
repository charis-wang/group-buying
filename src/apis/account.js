import userRequest from "./base";

const signUpForAccount = (userInfo) =>
  userRequest.post("/account/signup", userInfo);

const loginAccount = (userInfo) => userRequest.post("/account/login", userInfo);

export { signUpForAccount, loginAccount };
