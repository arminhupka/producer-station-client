import { type ReactElement } from "react";
import { Alert, Box, Button, Grid, TextField } from "@mui/material";

interface IProps {
  onSuccess: () => void;
}

const RegisterInvitation = ({ onSuccess }: IProps): ReactElement => (
  <Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Invitation Code' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' fullWidth onClick={onSuccess}>
          Verify Invitation Code
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Alert severity='error'>Invitation code not found</Alert>
      </Grid>
    </Grid>
  </Box>
);

export default RegisterInvitation;
