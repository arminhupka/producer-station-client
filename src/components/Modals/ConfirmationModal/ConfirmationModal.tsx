import { type ReactElement } from "react";
import BaseModal, { type IBaseModalProps } from "../BaseModal";
import { Button, Grid } from "@mui/material";
import Loader from "../../atoms/Loader/Loader";

type TProps = Pick<IBaseModalProps, "onClose" | "open" | "title">;

interface IProps extends TProps {
  onConfirm: () => void;
  isLoading: boolean;
}

const ConfirmationModal = ({
  onConfirm,
  onClose,
  open,
  title,
  isLoading,
}: IProps): ReactElement => (
  <BaseModal title={title} onClose={onClose} open={open}>
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button variant='contained' onClick={onConfirm} fullWidth>
              Confirm
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button onClick={onClose} fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  </BaseModal>
);

export default ConfirmationModal;
