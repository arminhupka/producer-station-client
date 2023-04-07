import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({
  position: "relative",
}));

export const StyledImage = styled("img")(() => ({
  position: "absolute",
  width: "64px",
  height: "64px",
  top: 0,
  left: 0,
}));
