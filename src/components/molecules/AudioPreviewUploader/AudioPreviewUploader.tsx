import { type ReactElement } from "react";
import { Box, Button, Paper } from "@mui/material";

const AudioPreviewUploader = (): ReactElement => (
  <Box>
    <Paper>
      <Box p={2}>
        <p>Audio Player</p>
        <Button variant='contained' fullWidth>
          Upload Audio Preview
        </Button>
      </Box>
    </Paper>
  </Box>
);

export default AudioPreviewUploader;
