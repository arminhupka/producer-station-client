import { type ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Lottie, { type Options } from "react-lottie";
import animation from "../../../../assets/lottie/success-animation.json";

const RegisterStepFour = (): ReactElement => {
  const lottieOptions: Options = {
    animationData: animation,
    loop: false,
  };

  return (
    <Box>
      <Box>
        <Lottie options={lottieOptions} />
      </Box>
      <Box
        mt={-6}
        position='relative'
        zIndex={2}
        display='flex'
        alignItems='center'
        flexDirection='column'
        gap={2}>
        <Typography textAlign='center' variant='h5'>
          Welcome aboard!
        </Typography>
        <Typography textAlign='center'>
          Just one more step to go. We&apos;ve sent a confirmation email to your
          inbox. Click on the link inside to activate your account and unlock
          the full potential of our platform.
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterStepFour;
