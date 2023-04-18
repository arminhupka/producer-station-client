import axios, { type AxiosError } from "axios";

import { resetUser } from "../features/userSlice";
import { type store } from "../store";
import { type UserLoginResponseDto } from "../api/api-types";
import { setAuthToken, setRefreshToken } from "./setAuthToken";

let _store: typeof store | null = null;

export const injectStore = (st: typeof store): void => {
  _store = st;
};

const refreshToken = async (): Promise<UserLoginResponseDto> => {
  const token = localStorage.getItem("refreshToken");
  try {
    const { data } = await api.get<UserLoginResponseDto>("/auth/refresh", {
      headers: {
        Authorization: `Bearer ${token as string}`,
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
    throw new Error(err);
  }
};

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${token as string}`,
  },
});

let retry: boolean = false;

api.interceptors.response.use(undefined, async (err: AxiosError) => {
  const prevRequest = err.config;

  if (err.response?.status === 401 && !retry && prevRequest) {
    retry = true;
    const token = await refreshToken();
    prevRequest.headers.Authorization = `Bearer ${token.token}`;
    retry = false;
    return await api(prevRequest);
  }

  retry = false;

  throw err;
});
