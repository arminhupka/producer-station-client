import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
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
