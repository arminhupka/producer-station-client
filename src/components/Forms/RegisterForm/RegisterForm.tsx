import { Box, Button, Paper, Typography } from "@mui/material";
import { type ReactElement, useState } from "react";
import RegisterStepTwo from "./RegisterStepTwo/RegisterStepTwo";
import RegisterStepThree from "./RegisterStepThree/RegisterStepThree";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterStepOne from "./RegisterStepOne/RegisterStepOne";
import RegisterStepFour from "./RegisterStepFour/RegisterStepFour";
import { useMutation } from "react-query";
import {
  type OkResponseDto,
  type RegisterVendorDto,
} from "../../../api/api-types";
import { type ApiError } from "../../../api/apiError";
import { type AxiosError } from "axios";
import { RegisterVendor } from "../../../api/queries";
import RegisterInvitation from "./RegisterInvitation/RegisterInvitation";

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

  const methods = useForm<IRegisterForm>({
    resolver: yupResolver(FormSchema),
  });

  const mutate = useMutation<
    OkResponseDto,
    AxiosError<ApiError>,
    RegisterVendorDto
  >(async (form) => await RegisterVendor(form), {
    onSuccess: () => {
      handleNextStep();
    },
  });

  const handleNextStep = (): void => {
    setCurrentStep((prevState) => prevState + 1);
  };
  const handlePrevStep = (): void => {
    setCurrentStep((prevState) => prevState - 1);
  };

  const generateForm = (): ReactElement => {
    switch (currentStep) {
      case 0: {
        return <RegisterInvitation />;
      }
      case 1: {
        return <RegisterStepOne />;
      }
      case 2: {
        return <RegisterStepTwo />;
      }
      case 3: {
        return <RegisterStepThree />;
      }
      case 4: {
        return <RegisterStepFour />;
      }
      default: {
        return <></>;
      }
    }
  };

  const generateFormButtons = (): ReactElement => {
    switch (currentStep) {
      case 1: {
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
              Next
            </Button>
          </>
        );
      }
      case 3: {
        return (
          <>
            <Button variant='outlined' fullWidth onClick={handlePrevStep}>
              Previous Step
            </Button>
            <Button
              fullWidth
              variant='contained'
              onClick={handleRegister}
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

  const handleRegister = (): void => {
    const formValues = methods.getValues();
    mutate.mutate({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      passwordConfirm: formValues.passwordConfirm,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      paypalEmail: formValues.paypalEmail,
      paypalEmailConfirm: formValues.paypalEmailConfirm,
    });
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <Box p={4}>
        {currentStep < 2 && <Typography variant='h5'>Register</Typography>}
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
