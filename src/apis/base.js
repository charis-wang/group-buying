import axios from "axios";

const errorWhiteList = [{ path: "/account/info", code: 401 }];

const userRequest = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

userRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    const currentPath = error.response.config.url;
    const currentStatus = error.response.status;

    for (const { path, code } of errorWhiteList) {
      if (path === currentPath && code === currentStatus) throw error;
    }

    if (error.response) {
      console.log("[Error] Response: ", error.response);
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
