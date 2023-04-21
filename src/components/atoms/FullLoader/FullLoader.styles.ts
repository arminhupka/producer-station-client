import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
}));
