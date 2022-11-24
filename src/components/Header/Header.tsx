import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

import useModalState from "../../hooks/useModalState";
import Sidebar from "../Sidebar/Sidebar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const Header = () => {
  const { isOpen, onOpen, onClose } = useModalState();

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
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
