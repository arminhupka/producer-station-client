import { type ReactElement } from "react";
import { Helmet } from "react-helmet";

import LoginForm from "../components/Forms/LoginForm/LoginForm";
import NoAuthLayout from "../layouts/NoAuthLayout";

const LoginView = (): ReactElement => (
  <>
    <Helmet>
      <title>Login | ProducerStation</title>
    </Helmet>
    <NoAuthLayout>
      <LoginForm />
    </NoAuthLayout>
  </>
);

export default LoginView;
