import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { ReactElement, useState } from "react";

const RegisterForm = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNextStep = () => setCurrentStep((prevState) => prevState + 1);
  const handlePrevStep = () => setCurrentStep((prevState) => prevState - 1);

  const FormStepOne = (): ReactElement => (
    <Box maxHeight={500}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField multiline fullWidth>
            handlePrevStep
          </TextField>
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

  const generateForm = () => {
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
          <Button fullWidth variant='outlined' onClick={handlePrevStep}>
            Previous
          </Button>
          <Button
            fullWidth
            variant='contained'
            onClick={() => {
              if (currentStep < 3) {
                handleNextStep();
              } else {
                console.log("submit");
              }
            }}>
            {currentStep === 3 ? "Register" : "Next"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
