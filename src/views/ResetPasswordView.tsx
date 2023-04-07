import { type ReactElement } from "react";
import { Helmet } from "react-helmet";

import ResetPasswordForm from "../components/Forms/ResetPasswordForm/ResetPasswordForm";
import NoAuthLayout from "../layouts/NoAuthLayout";

const ResetPasswordView = (): ReactElement => (
  <>
    <Helmet>
      <title>Reset Password | ProducerStation</title>
    </Helmet>
    <NoAuthLayout>
      <ResetPasswordForm />
    </NoAuthLayout>
  </>
);

export default ResetPasswordView;
