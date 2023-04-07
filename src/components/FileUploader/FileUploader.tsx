import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { type ReactElement } from "react";

const FileUploader = (): ReactElement => (
  <Box p={2} display='flex' flexDirection='column' gap={2}>
    <Box>
      <Typography fontWeight={600}>File name</Typography>
      <Typography fontSize='small'>Audio Preview</Typography>
    </Box>
    <LinearProgress variant='determinate' value={77} />
    <Button variant='contained' size='small' color='error'>
      Cancel Upload
    </Button>
  </Box>
);

export default FileUploader;
