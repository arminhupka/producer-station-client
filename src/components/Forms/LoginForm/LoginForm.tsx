import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { type AxiosError, type AxiosResponse } from "axios";
import { type ReactElement, useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

import {
  type UserLoginDto,
  type UserLoginResponseDto,
} from "../../../api/api-types";
import { type ApiError } from "../../../api/apiError";
import { getProfile } from "../../../features/userSlice";
import {
  persistedCookieReducer,
  persistedCookieRememberReducer,
  store,
  useAppDispatch,
  useAppSelector,
} from "../../../store";
import { api } from "../../../utils/api";
import { setAuthToken, setRefreshToken } from "../../../utils/setAuthToken";

const LoginForm = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.userReducer);

  const { isLoading, mutate, isError, error } = useMutation<
    AxiosResponse<UserLoginResponseDto>,
    AxiosError<ApiError>,
    UserLoginDto
  >(
    async ({ email, password, rememberMe }) =>
      await api.post<UserLoginResponseDto>(
        "/auth/login",
        { email, password, rememberMe },
        { withCredentials: true },
      ),
    {
      onSuccess: async (data) => {
        setAuthToken(data.data.token);
        setRefreshToken(data.data.refreshToken);
        await dispatch(getProfile());
      },
    },
  );

  const { register, handleSubmit } = useForm<UserLoginDto>();

  const handleLogin: SubmitHandler<UserLoginDto> = (form) => {
    // if (form.rememberMe) {
    // store.replaceReducer(persistedLocalReducer);
    // window.localStorage.setItem("rememberMe", "true");
    // } else {
    //   store.replaceReducer(persistedSessionReducer);
    // }

    if (form.rememberMe) {
      window.localStorage.setItem("rememberMe", JSON.stringify(true));
      store.replaceReducer(persistedCookieRememberReducer);
    } else {
      store.replaceReducer(persistedCookieReducer);
    }

    mutate({
      email: form.email,
      password: form.password,
      rememberMe: form.rememberMe,
    });
  };

  useEffect(() => {
    if (userState.user != null) {
      navigate("/panel");
    }
  }, [userState]);

  return (
    <Paper sx={{ width: "100%" }}>
      <Box p={4}>
        <Typography mb={2} variant='h5'>
          Login
        </Typography>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Login or E-mail'
                fullWidth
                disabled={isLoading}
                required
                {...register("email", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Password'
                type='password'
                fullWidth
                disabled={isLoading}
                required
                {...register("password", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox {...register("rememberMe")} />}
                    label='Remember Me'
                  />
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
                  <Button
                    type='submit'
                    variant='contained'
                    fullWidth
                    disabled={isLoading}>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link to='/register'>
                    <Button
                      component='span'
                      variant='outlined'
                      fullWidth
                      disabled={isLoading}>
                      Register
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {isError && error.response != null && (
          <Box mt={2}>
            <Alert severity='error'>{error.response.data.message}</Alert>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default LoginForm;
