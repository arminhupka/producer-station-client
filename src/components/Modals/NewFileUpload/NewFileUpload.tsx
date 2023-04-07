import { Button, Grid, TextField } from "@mui/material";

import BaseModal, { type IBaseModalProps } from "../BaseModal";
import { type ReactElement } from "react";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewFileUpload = ({ open, onClose }: TProps): ReactElement => (
  <BaseModal title='Select file to upload' onClose={onClose} open={open}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Audio Preview' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' fullWidth>
          Upload File
        </Button>
      </Grid>
    </Grid>
  </BaseModal>
);

export default NewFileUpload;
