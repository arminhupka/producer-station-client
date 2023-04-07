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
// import storage from "redux-persist/lib/storage";
// import storageSession from "redux-persist/lib/storage/session";
// @ts-expect-error
import { CookieStorage } from "redux-persist-cookie-storage";

import labelsReducer from "../src/features/labelsSlice";
import userReducer from "../src/features/userSlice";

const rootReducer = combineReducers({ userReducer, labelsReducer });

// const persistLocalConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
//
// const persistSessionConfig = {
//   key: "root",
//   version: 1,
//   storage: storageSession,
// };

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
};

export const persistedCookieReducer = persistReducer(
  persistCookieConfig,
  rootReducer,
);
export const persistedCookieRememberReducer = persistReducer(
  persistCookieRememberConfig,
  rootReducer,
);

// export const persistedLocalReducer = persistReducer(
//   persistLocalConfig,
//   rootReducer,
// );
//
// export const persistedSessionReducer = persistReducer(
//   persistSessionConfig,
//   rootReducer,
// );

export const store = configureStore({
  // reducer: window.localStorage.getItem("rememberMe")
  //   ? persistedLocalReducer
  //   : persistedSessionReducer,
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
