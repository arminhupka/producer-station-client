import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../store";

interface IProps {
  children: ReactNode;
}

const AuthRoute = ({ children }: IProps): ReactElement => {
  const userState = useAppSelector((state) => state.userReducer);

  if (userState.user == null) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

export default AuthRoute;
