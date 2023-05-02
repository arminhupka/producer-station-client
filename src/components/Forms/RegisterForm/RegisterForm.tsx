import { Box, Button, Paper, Typography } from "@mui/material";
import { type ReactElement, useState } from "react";
import RegisterStepTwo from "./RegisterStepTwo/RegisterStepTwo";
import RegisterStepThree from "./RegisterStepThree/RegisterStepThree";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterStepOne from "./RegisterStepOne/RegisterStepOne";
import RegisterStepFour from "./RegisterStepFour/RegisterStepFour";

const emailRegex = /^\w+(.?\w+)*@\w+(.?\w+)*(\.\w{2,3})+$/;

export interface IRegisterForm {
  agreementChecked: boolean;
  username: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  email: string;
  paypalEmail: string;
  paypalEmailConfirm: string;
}

const RegisterForm = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const FormSchema = yup.object().shape({
    agreementChecked: yup.boolean().isTrue(),
    username: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 0,
      then: () => yup.string().required("You must provide username"),
    }),
    email: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 0,
      then: () =>
        yup
          .string()
          .matches(emailRegex, { message: "Email must be in proper format" })
          .required("You must provide first name"),
    }),
    password: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 0,
      then: () => yup.string().required("You must provide password"),
    }),
    passwordConfirm: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 0,
      then: () =>
        yup
          .string()
          .test(
            "password-confirm",
            "Passwords must be the same",
            (value, context) => {
              return value === context.parent.password;
            },
          )
          .required("You must confirm your password"),
    }),
    firstName: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 0,
      then: () => yup.string().required("You must provide first name"),
    }),
    lastName: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 0,
      then: () => yup.string().required("You must provide first name"),
    }),
    paypalEmail: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 1,
      then: () => yup.string().required("You must provide your PayPal email"),
    }),
    paypalEmailConfirm: yup.string().when("agreementChecked", {
      is: (agreementChecked: boolean) => agreementChecked && currentStep > 1,
      then: () =>
        yup
          .string()
          .required("You must confirm your PayPal email")
          .test(
            "paypal-confirm",
            "Passwords must be the same",
            (value, context) => {
              return value === context.parent.paypalEmail;
            },
          ),
    }),
  });

  const handleNextStep = async (): Promise<void> => {
    setCurrentStep((prevState) => prevState + 1);
  };
  const handlePrevStep = async (): Promise<void> => {
    setCurrentStep((prevState) => prevState - 1);
  };

  const generateForm = (): ReactElement => {
    switch (currentStep) {
      case 0: {
        return <RegisterStepOne />;
      }
      case 1: {
        return <RegisterStepTwo />;
      }
      case 2: {
        return <RegisterStepThree />;
      }
      case 3: {
        return <RegisterStepFour />;
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
            <Button
              variant='contained'
              disabled={!methods.formState.isValid}
              fullWidth
              onClick={handleNextStep}>
              Next
            </Button>
          </>
        );
      }
      case 1: {
        return (
          <>
            <Button variant='outlined' fullWidth onClick={handlePrevStep}>
              Previous Step
            </Button>
            <Button
              fullWidth
              variant='contained'
              onClick={handleNextStep}
              disabled={!methods.formState.isValid}>
              Next
            </Button>
          </>
        );
      }
      case 2: {
        return (
          <>
            <Button variant='outlined' fullWidth onClick={handlePrevStep}>
              Previous Step
            </Button>
            <Button
              fullWidth
              variant='contained'
              onClick={handleNextStep}
              disabled={!methods.formState.isValid}>
              Register
            </Button>
          </>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  const methods = useForm<IRegisterForm>({
    resolver: yupResolver(FormSchema),
  });

  return (
    <Paper sx={{ width: "100%" }}>
      <Box p={4}>
        <Typography variant='h5'>Register</Typography>
        <FormProvider {...methods}>
          <Box mt={4} display='flex' flexDirection='column' gap={2}>
            {generateForm()}
            {generateFormButtons()}
          </Box>
        </FormProvider>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
