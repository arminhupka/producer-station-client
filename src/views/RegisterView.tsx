import { ReactElement } from "react";

import CheckInvitationForm from "../components/Forms/CheckInvitationForm/CheckInvitationForm";
import NoAuthLayout from "../layouts/NoAuthLayout";

const LoginView = (): ReactElement => (
  <NoAuthLayout>
    <CheckInvitationForm />
  </NoAuthLayout>
);

export default LoginView;
