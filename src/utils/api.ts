import axios, { AxiosError } from "axios";

import { resetUser } from "../features/userSlice";
import { store } from "../store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let _store: typeof store | null = null;

export const injectStore = (st: typeof store) => {
  _store = st;
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.response.use(undefined, async (err: AxiosError) => {
  if (err.response?.status === 401) {
    _store?.dispatch(resetUser());
  }

  throw err;
});
