import { type ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import NoAuthLayout from "../layouts/NoAuthLayout";

const RegisterView = (): ReactElement => {
  const [canRegister] = useState<boolean>(true);

  // const handleVerification = (): void => {
  //   setCanRegister(true);
  // };

  return (
    <>
      <Helmet>
        <title>Register | ProducerStation</title>
      </Helmet>
      <NoAuthLayout>
        {/* {!canRegister && <CheckInvitationForm onVerify={handleVerification} />} */}
        {canRegister && <RegisterForm />}
      </NoAuthLayout>
    </>
  );
};

export default RegisterView;
