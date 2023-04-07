import {
  Box,
  Button,
  type ButtonProps,
  ListItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { type ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

interface IStyledButtonProps extends ButtonProps {
  active?: boolean | string;
  noLabels?: boolean;
}

const StyledBox = styled(Button)<IStyledButtonProps>(
  ({ theme, active, noLabels }) => ({
    width: "100%",
    px: 3,
    display: "flex",
    justifyContent: noLabels ? "flex-start" : "center",
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
    span: {
      marginRight: noLabels ? "20px" : 0,
    },
  }),
);

interface IProps {
  title: string;
  href: string;
  icon: ReactElement;
  hideTitles: boolean;
}

const NavItem = ({ title, href, icon, hideTitles }: IProps): ReactElement => {
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
        <StyledBox active={active} startIcon={icon} noLabels={hideTitles}>
          {hideTitles && (
            <Box>
              <Typography variant='body2'>{title}</Typography>
            </Box>
          )}
        </StyledBox>
      </Link>
    </ListItem>
  );
};

export default NavItem;
