import { Box, Button, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

interface IStyledButtonProps {
  active: boolean;
}

const StyledBox = styled(Button)<IStyledButtonProps>(({ theme, active }) => ({
  width: "100%",
  px: 3,
  display: "flex",
  justifyContent: "flex-start",
  fontWeight: "500",
  textAlign: "left",
  textTransform: "none",
  color: active ? theme.palette.secondary.main : theme.palette.neutral[300],
  background: !active ? theme.palette.darkLight : "rgba(255,255,255, 0.08)",
  borderRadius: 1,
  "& .MuiButton-startIcon": {
    color: active ? theme.palette.secondary.main : theme.palette.neutral[400],
  },
  "&:hover": {
    backgroundColor: "rgba(255,255,255, 0.08)",
  },
}));

interface IProps {
  title: string;
  href: string;
  icon: ReactElement;
}

const NavItem = ({ title, href, icon }: IProps): ReactElement => {
  const location = useLocation();
  const active = href !== "" ? location.pathname === href : false;

  return (
    <ListItem
      disableGutters
      sx={{
        mb: 0.5,
        py: 0,
        px: 2,
      }}>
      <Link to={href} style={{ width: "100%", textDecoration: "none" }}>
        <StyledBox active={active} startIcon={icon}>
          <Box>{title}</Box>
        </StyledBox>
      </Link>
    </ListItem>
  );
};

export default NavItem;
