import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

import { resetUser } from "../../features/userSlice";
import useModalState from "../../hooks/useModalState";
import { useAppDispatch } from "../../store";
import Sidebar from "../Sidebar/Sidebar";
import { type ReactElement } from "react";
import Container from "@mui/material/Container";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const Header = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useModalState();

  const dispatch = useAppDispatch();

  const handleUserLogout = (): void => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("rememberMe");
    dispatch(resetUser());
  };

  return (
    <StyledAppBar>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Container maxWidth='xl' disableGutters>
        <Toolbar
          sx={{
            px: 2,
          }}>
          <IconButton
            onClick={onOpen}
            sx={{
              display: {
                sm: "block",
                lg: "none",
              },
            }}>
            <Menu />
          </IconButton>
          <Button
            variant='contained'
            size='small'
            sx={{ marginLeft: "auto" }}
            onClick={handleUserLogout}>
            Logout
          </Button>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
