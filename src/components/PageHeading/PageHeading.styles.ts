import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.palette.grey[300],
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));
