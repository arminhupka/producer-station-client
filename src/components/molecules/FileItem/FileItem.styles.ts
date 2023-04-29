import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const StyledFileName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const StyledSize = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
}));

StyledSize.defaultProps = {
  as: "span",
};

export const StyledInfoWrapper = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

export const StyledButtonsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.grey[50],
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: theme.spacing(0.5),
}));

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flex: 1,
  },
}));
