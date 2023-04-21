import { alpha, Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(8),
  background: alpha(theme.palette.primary.main, 0.05),
  border: "2px dashed",
  borderColor: alpha(theme.palette.primary.main, 0.3),
  borderRadius: theme.spacing(2),
}));

export const StyledHeading = styled(Typography)(() => ({}));

export const StyledDescription = styled(Typography)(() => ({}));

export const StyledLabel = styled("label")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledInput = styled("input")(() => ({}));

StyledInput.defaultProps = {
  type: "file",
  hidden: true,
};
