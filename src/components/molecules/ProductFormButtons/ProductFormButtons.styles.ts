import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    flexDirection: "row",
  },
}));
