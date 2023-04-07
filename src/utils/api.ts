/* eslint-disable */

import axios, { type AxiosError } from "axios";

import { resetUser } from "../features/userSlice";
import { type store } from "../store";
import { type UserLoginResponseDto } from "../api/api";
import { setAuthToken, setRefreshToken } from "./setAuthToken";

let _store: typeof store | null = null;

export const injectStore = (st: typeof store) => {
  _store = st;
};

const refreshToken = async (): Promise<UserLoginResponseDto> => {
  const token = localStorage.getItem("refreshToken");
  try {
    const { data } = await api.get<UserLoginResponseDto>("/auth/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAuthToken(data.token);
    setRefreshToken(data.refreshToken);
    return data;
  } catch (err) {
    _store?.dispatch(resetUser());
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("refreshToken");
    window.localStorage.removeItem("rememberMe");
    throw err;
  }
};

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

let rertying: boolean = false;

api.interceptors.response.use(undefined, async (err: AxiosError) => {
  const prevRequest = err.config;

  if (err.response?.status === 401 && !rertying && prevRequest) {
    rertying = true;
    const token = await refreshToken();
    prevRequest.headers.Authorization = `Bearer ${token.token}`;
    rertying = false;
    return await api(prevRequest);
  }

  throw err;
});
