import userRequest from "./base";

const signUpForAccount = (userInfo) =>
  userRequest.post("/account/signup", userInfo);

const loginAccount = (userInfo) => userRequest.post("/account/login", userInfo);
const logoutAccount = () => userRequest.post("/account/logout");
const getAccountInfo = () => userRequest.get("/account/info");
export { signUpForAccount, loginAccount, logoutAccount, getAccountInfo };
