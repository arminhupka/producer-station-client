import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const LoginForm = (): ReactElement => (
  <Paper sx={{ width: "100%" }}>
    <Box p={4}>
      <Typography mb={2} variant='h5'>
        Login
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label='Login or E-mail' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' type='password' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label='Remember Me' />
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
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link to='/register'>
                  <Button component='a' variant='text' fullWidth>
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

export default LoginForm;
