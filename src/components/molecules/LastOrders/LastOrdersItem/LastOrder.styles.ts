import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const StyledDateWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: theme.palette.grey[200],
  borderRadius: theme.spacing(0.4),
}));

export const StyledDate = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 600,
}));

export const StyledMonth = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 600,
  color: theme.palette.grey[600],
}));

export const StyledOrderDetailsWrapper = styled(Box)(() => ({
  flex: 1,
}));

export const StyledOrderHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 600,
}));

export const StyledOrderNumber = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.grey[800],
}));

export const StyledEarning = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 700,
  color: theme.palette.primary.main,
}));
