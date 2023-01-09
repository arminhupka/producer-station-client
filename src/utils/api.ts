import axios, { AxiosError } from "axios";

import { resetUser } from "../features/userSlice";
import { store } from "../store";

let _store: typeof store | null = null;

export const injectStore = (st: typeof store) => {
  _store = st;
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: window.localStorage.getItem("token")
      ? `Bearer ${window.localStorage.getItem("token")}`
      : null,
  },
});

api.interceptors.response.use(undefined, async (err: AxiosError) => {
  if (err.response?.status === 401) {
    _store?.dispatch(resetUser());
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("rememberMe");
  }

  throw err;
});
