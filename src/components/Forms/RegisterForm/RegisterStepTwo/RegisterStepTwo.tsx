import { type ReactElement } from "react";
import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { type IRegisterForm } from "../RegisterForm";

const RegisterStepTwo = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IRegisterForm>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label='Username'
          fullWidth
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='E-mail'
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Password'
          type='password'
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Password Confirm'
          type='password'
          fullWidth
          {...register("passwordConfirm")}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='First Name'
          fullWidth
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Last Name'
          fullWidth
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Grid>
    </Grid>
  );
};

export default RegisterStepTwo;
