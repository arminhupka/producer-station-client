import Box from "@mui/material/Box";
import Modal, { ModalProps } from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

interface IBaseModalProps extends ModalProps {
  title: string;
}

const BaseModal = ({ open, title }: IBaseModalProps): ReactElement => (
  <Modal open={opener}>
    <Box>
      <Typography>{title}</Typography>
    </Box>
  </Modal>
);

export default BaseModal;
