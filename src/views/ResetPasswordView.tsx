import { ReactElement } from "react";

import ResetPasswordForm from "../components/Forms/ResetPasswordForm/ResetPasswordForm";
import NoAuthLayout from "../layouts/NoAuthLayout";

const ResetPasswordView = (): ReactElement => (
  <NoAuthLayout>
    <ResetPasswordForm />
  </NoAuthLayout>
);

export default ResetPasswordView;
