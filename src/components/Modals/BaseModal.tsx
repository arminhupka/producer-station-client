import { Close as CloseIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal, { type ModalProps } from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { type ReactElement } from "react";

const StyledModalWrapper = styled(Box)(({ theme }) => ({
  background: "white",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    height: "auto",
    width: "100%",
    maxWidth: 650,
    top: "50%",
    left: "50%",
    borderRadius: 4,
    boxShadow: theme.shadows[20],
    transform: "translate(-50%, -50%)",
  },
}));

const StyledHeading = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid",
  borderBottomColor: theme.palette.grey[300],
}));

const StyledBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export interface IBaseModalProps extends ModalProps {
  title: string;
  onClose: () => void;
}

const BaseModal = ({
  open,
  title,
  children,
  onClose,
}: IBaseModalProps): ReactElement => (
  <Modal open={open} onClose={onClose}>
    <Box p={3} position='relative' height='100%'>
      <StyledModalWrapper>
        <StyledHeading>
          <Typography component='h2' fontSize='larger' fontWeight={600}>
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </StyledHeading>
        <StyledBody>{children}</StyledBody>
      </StyledModalWrapper>
    </Box>
  </Modal>
);

export default BaseModal;
