import { Button, Grid, TextField } from "@mui/material";
import { ReactElement } from "react";

import BaseModal, { IBaseModalProps } from "../BaseModal";

type TProps = Pick<IBaseModalProps, "open" | "onClose">;

const NewLabelModal = ({ onClose, open }: TProps): ReactElement => (
  <BaseModal title='New Label' onClose={onClose} open={open}>
    <form>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <TextField label='Label name' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' fullWidth>
            Add New Label
          </Button>
        </Grid>
      </Grid>
    </form>
  </BaseModal>
);

export default NewLabelModal;
