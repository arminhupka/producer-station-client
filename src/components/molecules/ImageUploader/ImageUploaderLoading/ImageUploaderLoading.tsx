import { type ReactElement } from "react";
import { Box, CircularProgress } from "@mui/material";

const ImageUploaderLoading = (): ReactElement => {
  return (
    <Box
      position='absolute'
      display='flex'
      width='100%'
      height='100%'
      alignItems='center'
      justifyContent='center'>
      <CircularProgress color='primary' size={49} />
    </Box>
  );
};

export default ImageUploaderLoading;
