import { type ReactElement } from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = (): ReactElement => (
  <Box p={8} display='flex' alignItems='center' justifyContent='center'>
    <CircularProgress />
  </Box>
);

export default Loader;
