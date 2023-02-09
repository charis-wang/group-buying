import axios from "axios";

const userRequest = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

userRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log("[Error] Response: ", error.response);
    }

    throw error;
  }
);

export default userRequest;
