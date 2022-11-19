import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const ResetPasswordForm = (): ReactElement => (
  <Paper sx={{ width: "100%" }}>
    <Box p={4}>
      <Typography mb={2} variant='h5'>
        Reset Password
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label='E-mail' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>
              Reset Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  </Paper>
);

export default ResetPasswordForm;
