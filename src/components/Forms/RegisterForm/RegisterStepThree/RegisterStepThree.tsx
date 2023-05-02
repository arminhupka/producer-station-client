import { type ReactElement } from "react";
import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { type IRegisterForm } from "../RegisterForm";

const RegisterStepThree = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IRegisterForm>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label='PayPal Email'
          fullWidth
          {...register("paypalEmail")}
          error={!!errors.paypalEmail}
          helperText={errors.paypalEmail?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='Confirm PayPal Email'
          fullWidth
          {...register("paypalEmailConfirm")}
          error={!!errors.paypalEmailConfirm}
          helperText={errors.paypalEmailConfirm?.message}
        />
      </Grid>
    </Grid>
  );
};

export default RegisterStepThree;
