import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
