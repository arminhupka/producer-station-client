import { Box, CircularProgress } from "@mui/material";
import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

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

  return <Outlet />;
};

export default AuthRoute;
