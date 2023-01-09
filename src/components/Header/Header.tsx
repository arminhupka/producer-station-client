import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

import { resetUser } from "../../features/userSlice";
import useModalState from "../../hooks/useModalState";
import { useAppDispatch } from "../../store";
import Sidebar from "../Sidebar/Sidebar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const Header = () => {
  const { isOpen, onOpen, onClose } = useModalState();

  const dispatch = useAppDispatch();

  const handleUserLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("rememberMe");
    dispatch(resetUser());
  };

  return (
    <StyledAppBar
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: "calc(100% - 280px)",
        },
      }}>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Toolbar
        disableGutters
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
    </StyledAppBar>
  );
};

export default Header;
