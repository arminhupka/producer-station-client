import { api } from "./api";

const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    api.defaults.headers.Authorization = null;
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
