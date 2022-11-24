import { Box, CircularProgress } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../store";

interface IProps {
  children: ReactNode;
}

const AuthRoute = ({ children }: IProps): ReactElement => {
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

  return <>{children}</>;
};

export default AuthRoute;
