import { ReactElement } from "react";

import LoginForm from "../components/Forms/LoginForm/LoginForm";
import NoAuthLayout from "../layouts/NoAuthLayout";

const LoginView = (): ReactElement => (
  <NoAuthLayout>
    <LoginForm />
  </NoAuthLayout>
);

export default LoginView;
