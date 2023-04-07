import { api } from "./api";

export const setAuthToken = (token: string): void => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
  localStorage.setItem("token", token);
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem("refreshToken", token);
};

export default setAuthToken;
