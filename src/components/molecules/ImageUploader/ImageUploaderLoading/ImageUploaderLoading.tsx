import { type ReactElement } from "react";
import { alpha, Box, CircularProgress, useTheme } from "@mui/material";

const ImageUploaderLoading = (): ReactElement => {
  const theme = useTheme();

  return (
    <Box
      position='absolute'
      display='flex'
      width='100%'
      height='100%'
      alignItems='center'
      justifyContent='center'
      bgcolor={alpha(theme.palette.primary.main, 0.6)}>
      <CircularProgress size={49} />
    </Box>
  );
};

export default ImageUploaderLoading;
