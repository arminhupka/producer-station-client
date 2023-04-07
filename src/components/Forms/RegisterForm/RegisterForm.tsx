import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { type ReactElement, useState } from "react";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas elit et mauris euismod vehicula. Phasellus tempus turpis lacus, non pulvinar elit molestie et. Quisque tempus sapien diam, vel imperdiet risus fringilla eu. Phasellus egestas ultrices ligula, vel auctor lorem euismod vel. Donec vitae ipsum enim. Phasellus viverra mollis turpis, et porta libero efficitur eget. Praesent in nulla convallis, volutpat metus a, venenatis ligula.";

const RegisterForm = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNextStep = async (): Promise<void> => {
    setCurrentStep((prevState) => prevState + 1);
  };
  const handlePrevStep = async (): Promise<void> => {
    setCurrentStep((prevState) => prevState - 1);
  };

  const FormStepOne = (): ReactElement => (
    <Box maxHeight={500}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField multiline rows={10} value={loremIpsum} fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
  const FormStepTwo = (): ReactElement => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Username' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label='E-mail' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Password' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Password Confirm' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='First Name' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Last Name' fullWidth />
      </Grid>
    </Grid>
  );
  const FormStepThree = (): ReactElement => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='PayPal Email' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Confirm PayPal Email' fullWidth />
      </Grid>
    </Grid>
  );

  const generateForm = (): ReactElement => {
    switch (currentStep) {
      case 0: {
        return <FormStepOne />;
      }
      case 1: {
        return <FormStepTwo />;
      }
      case 2: {
        return <FormStepThree />;
      }
      default: {
        return <></>;
      }
    }
  };

  const generateFormButtons = (): ReactElement => {
    switch (currentStep) {
      case 0: {
        return (
          <>
            <Button variant='contained' fullWidth onClick={handleNextStep}>
              Next
            </Button>
          </>
        );
      }
      case 1: {
        return (
          <>
            <Button variant='outlined' fullWidth onClick={handlePrevStep}>
              Previous
            </Button>
            <Button fullWidth variant='contained' onClick={handleNextStep}>
              Next
            </Button>
          </>
        );
      }
      case 2: {
        return (
          <>
            <Button variant='outlined' fullWidth onClick={handlePrevStep}>
              Previous
            </Button>
            <Button fullWidth variant='contained' onClick={handleNextStep}>
              Next
            </Button>
          </>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <Box p={4}>
        <Typography mb={2} variant='h5'>
          Register
        </Typography>
        <form>{generateForm()}</form>
        <Box mt={2} display='flex' gap={2}>
          {generateFormButtons()}
        </Box>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
