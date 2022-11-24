import { Close as CloseIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal, { ModalProps } from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

const StyledModalWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  background: "white",
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
  borderBottomColor: theme.palette.grey[400],
}));

const StyledBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

interface IBaseModalProps extends ModalProps {
  title: string;
  onClose: () => void;
}

const BaseModal = ({ open, title, children, onClose }: IBaseModalProps): ReactElement => (
  <Modal open={open}>
    <Box position='relative' height='100%'>
      <StyledModalWrapper>
        <StyledHeading>
          <Typography fontSize='larger' fontWeight={700}>
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
