import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import { UserLoginDto } from "../../../api/api";
import { ApiError } from "../../../api/apiError";
import { api } from "../../../utils/api";

const LoginForm = (): ReactElement => {
  const { isLoading, mutate } = useMutation<AxiosResponse<{ ok: true }>, AxiosError<ApiError>, UserLoginDto>(
    async ({ login, password, save }) =>
      await api.post<{ ok: true }>("/auth/login", { login, password, save }, { withCredentials: true }),
  );

  const { register, handleSubmit } = useForm<UserLoginDto>();

  const handleLogin: SubmitHandler<UserLoginDto> = (form) => {
    mutate({ login: form.login, password: form.password, save: form.save });
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <Box p={4}>
        <Typography mb={2} variant='h5'>
          Login
        </Typography>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label='Login or E-mail' fullWidth disabled={isLoading} {...register("login")} />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Password' type='password' fullWidth disabled={isLoading} {...register("password")} />
            </Grid>
            <Grid item xs={12}>
              <Box display='flex' alignItems='center' justifyContent='space-between'>
                <FormGroup>
                  <FormControlLabel control={<Checkbox {...register("save")} />} label='Remember Me' />
                </FormGroup>
                <Link to='/reset-password'>
                  <Typography component='span' fontWeight='500'>
                    Lost Password?
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' fullWidth disabled={isLoading}>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link to='/register'>
                    <Button component='span' variant='text' fullWidth disabled={isLoading}>
                      Register
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default LoginForm;
