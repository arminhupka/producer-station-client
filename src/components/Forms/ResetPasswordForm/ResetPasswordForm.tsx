import { Alert, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { ResetPasswordDto } from "../../../api/api";
import { ApiError } from "../../../api/apiError";
import { api } from "../../../utils/api";

const ResetPasswordForm = (): ReactElement => {
  const { isLoading, mutate, isSuccess, isError, error } = useMutation<
    AxiosResponse<{ ok: true }>,
    AxiosError<ApiError>,
    ResetPasswordDto
  >(async ({ email }) => await api.post<{ ok: true }>("/users/reset-password", { email }), {
    onSuccess: () => {
      reset();
    },
    onError: () => {
      reset();
    },
  });

  const { register, handleSubmit, reset } = useForm<ResetPasswordDto>();

  const handleResetPassword: SubmitHandler<ResetPasswordDto> = (form) => {
    mutate({ email: form.email });
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <Box p={4}>
        <Typography mb={2} variant='h5'>
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='E-mail'
                fullWidth
                disabled={isLoading}
                required
                {...register("email", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth disabled={isLoading}>
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </form>
        {isSuccess && (
          <Box mt={2}>
            <Alert severity='success'>We sent you an email with instructions</Alert>
          </Box>
        )}
        {isError && error.response != null && (
          <Box mt={2}>
            <Alert severity='error'>{error.response.data.message}</Alert>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default ResetPasswordForm;
