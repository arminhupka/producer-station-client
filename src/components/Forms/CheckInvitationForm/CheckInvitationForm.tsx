import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { ReactElement } from "react";

const CheckInvitationForm = (): ReactElement => (
  <Paper sx={{ width: "100%" }}>
    <Box p={4}>
      <Typography mb={2} variant='h5'>
        Provide Your Invitation Code
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label='Invitaion Code' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>
              Verify
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  </Paper>
);

export default CheckInvitationForm;
