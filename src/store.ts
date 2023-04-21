/* eslint-disable */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as Cookies from "cookies-js";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

// @ts-ignore
import { CookieStorage } from "redux-persist-cookie-storage";

import labelsReducer from "./features/labelsSlice";
import userReducer from "./features/userSlice";
import appReducer from "./features/appSlice";
import uploadReducer from "./features/uploadSlice";

const rootReducer = combineReducers({
  userReducer,
  labelsReducer,
  appReducer,
  uploadReducer,
});

const persistCookieConfig = {
  key: "user",
  storage: new CookieStorage(Cookies /*, options */),
};

const persistCookieRememberConfig = {
  key: "user",
  storage: new CookieStorage(Cookies, {
    expiration: {
      default: 365 * 86400, // Cookies expire after one year
    },
  }),
  blacklist: ["labelsReducer", "uploadReducer"],
};

export const persistedCookieReducer = persistReducer(
  persistCookieConfig,
  rootReducer,
);
export const persistedCookieRememberReducer = persistReducer(
  persistCookieRememberConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: window.localStorage.getItem("rememberMe")
    ? persistedCookieRememberReducer
    : persistedCookieReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
