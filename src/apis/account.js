import req from "./base";

const signUpForAccount = (userInfo) => req.post("/account/signup", userInfo);

const loginAccount = (userInfo) => req.post("/account/login", userInfo);

const logoutAccount = () => req.post("/account/logout");

const getAccountInfo = () => req.get("/account/info");

export { signUpForAccount, loginAccount, logoutAccount, getAccountInfo };
