import axios from "axios";

const debug = true;
const errorWhiteList = [{ path: "/account/info", code: 401 }];

const userRequest = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

userRequest.interceptors.response.use(
  (response) => {
    if (debug) {
      const method = response.config.method;
      console.log(
        `%c[${method.toUpperCase()}] ${response.config.url}`,
        "color: blue; font-size:13px;"
      );
      console.log(response.config.params || "< No Params >");
      console.log(response.data);
      console.log("");
    }

    return response;
  },
  (error) => {
    const currentPath = error.response.config.url;
    const currentStatus = error.response.status;

    for (const { path, code } of errorWhiteList) {
      if (path === currentPath && code === currentStatus) throw error;
    }

    if (error.response) {
      if (debug) console.log("[Error] Response: ", error.response);
    }

    throw error;
  }
);

const req = {
  get: (url, data) => userRequest.get(url, { params: data }),
  post: (url, data) => userRequest.post(url, data),
  delete: (url, data) => userRequest.delete(url, { params: data }),
};

export default req;
