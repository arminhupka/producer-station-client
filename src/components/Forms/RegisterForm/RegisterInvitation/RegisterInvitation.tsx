import { type ReactElement } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";

const RegisterInvitation = (): ReactElement => (
  <Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Invitation Code' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' fullWidth>
          Verify Invitation Code
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default RegisterInvitation;
