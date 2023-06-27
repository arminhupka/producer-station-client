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
    throw new Error("error during refreshing token");
  }
};
const token = localStorage.getItem("token");

const logout = (): void => {
  _store?.dispatch(resetUser());
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("rememberMe");
};

type IRequestCb = (token: string) => void;
let isRefreshing = false;
const refreshSubscribers: IRequestCb[] = [];

const subscribeTokenRefresh = (cb: IRequestCb): void => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token: string): void => {
  refreshSubscribers.forEach((cb) => {
    cb(token);
  });
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    Authorization: `Bearer ${token as string}`,
  },
});

api.interceptors.response.use(undefined, async (err: AxiosError) => {
  if (err?.response?.status === 401) {
    const prevRequest = err.config;

    if (prevRequest?.url === "/auth/refresh") {
      logout();
    }

    const retryOriginalRequest = new Promise((resolve) => {
      subscribeTokenRefresh((newToken: string) => {
        if (prevRequest) {
          if (prevRequest?.headers) {
            prevRequest.headers.Authorization = `Bearer ${newToken}`;
          }
          resolve(api(prevRequest));
        }
      });
    });

    if (!isRefreshing && prevRequest) {
      isRefreshing = true;
      await refreshToken()
        .then(({ token }) => {
          prevRequest.headers.Authorization = `Bearer ${token}`;
          onRefreshed(token);
        })
        .catch(async () => {
          throw Error("error");
        })
        .finally(() => {
          refreshSubscribers.length = 0;
          isRefreshing = false;
        });
    }

    return await retryOriginalRequest;
  }

  throw err;
});
