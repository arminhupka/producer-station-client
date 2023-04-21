import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "#111827",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));
