import { type ReactElement, useState } from "react";
import { Helmet } from "react-helmet";

import CheckInvitationForm from "../components/Forms/CheckInvitationForm/CheckInvitationForm";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import NoAuthLayout from "../layouts/NoAuthLayout";

const RegisterView = (): ReactElement => {
  const [canRegister, setCanRegister] = useState<boolean>(false);

  const handleVerification = (): void => {
    setCanRegister(true);
  };

  return (
    <>
      <Helmet>
        <title>Register | ProducerStation</title>
      </Helmet>
      <NoAuthLayout>
        {!canRegister && <CheckInvitationForm onVerify={handleVerification} />}
        {canRegister && <RegisterForm />}
      </NoAuthLayout>
    </>
  );
};

export default RegisterView;
