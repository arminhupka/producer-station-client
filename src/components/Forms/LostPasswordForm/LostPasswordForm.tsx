import { type ReactElement } from "react";
import { Box, Paper, Typography } from "@mui/material";

const LostPasswordForm = (): ReactElement => (
  <Paper>
    <Box p={4}>
      <Typography variant='h5'>Reset password</Typography>
    </Box>
  </Paper>
);

export default LostPasswordForm;
