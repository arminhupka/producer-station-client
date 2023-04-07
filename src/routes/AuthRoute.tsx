import { Box, CircularProgress } from "@mui/material";
import { type ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Providers from "../providers";
import { useAppSelector } from "../store";

const AuthRoute = (): ReactElement => {
  const userState = useAppSelector((state) => state.userReducer);

  if (userState.isLoading) {
    return (
      <Box width='100%' height='100%'>
        <CircularProgress />
      </Box>
    );
  }

  if (userState.user == null) {
    return <Navigate to='/login' replace />;
  }

  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};

export default AuthRoute;
