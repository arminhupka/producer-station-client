import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Sidebar from "../Sidebar/Sidebar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const Header = () => (
  <StyledAppBar
    sx={{
      left: {
        lg: 280,
      },
      width: {
        lg: "calc(100% - 280px)",
      },
    }}>
    <Sidebar />
    <Toolbar
      disableGutters
      sx={{
        px: 2,
      }}>
      <Typography color='black'>Panel</Typography>
    </Toolbar>
  </StyledAppBar>
);

export default Header;
