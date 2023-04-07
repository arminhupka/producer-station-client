import { Menu } from "@mui/icons-material";
import {
  AppBar,
  type AppBarProps,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { resetUser } from "../../features/userSlice";
import useModalState from "../../hooks/useModalState";
import { useAppDispatch, useAppSelector } from "../../store";
import Sidebar from "../Sidebar/Sidebar";
import { type ReactElement } from "react";
import Container from "@mui/material/Container";

interface IStyledAppBar extends AppBarProps {
  isFullMenu: boolean;
}

const StyledAppBar = styled(AppBar)<IStyledAppBar>(({ theme, isFullMenu }) => ({
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.up("lg")]: {
    paddingLeft: isFullMenu ? 96 : 280,
  },
}));

const Header = (): ReactElement => {
  const isFullMenu = useAppSelector((state) => state.appReducer.isFullMenu);
  const { isOpen, onOpen, onClose } = useModalState();

  const dispatch = useAppDispatch();

  const handleUserLogout = (): void => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("rememberMe");
    dispatch(resetUser());
  };

  return (
    <StyledAppBar isFullMenu={!isFullMenu}>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            alignItems: "center",
          }}>
          <IconButton
            onClick={onOpen}
            sx={{
              display: {
                sm: "flex",
                lg: "none",
              },
            }}>
            <Menu />
          </IconButton>
          <Typography color='primary' fontWeight={700}>
            Producer Station Vendor Panel
          </Typography>
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
