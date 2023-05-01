import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

interface IStyledWrapper {
  noBorder?: boolean;
}

export const StyledWrapper = styled(Box)<IStyledWrapper>(
  ({ theme, noBorder }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    ...(!noBorder && {
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
  }),
);

export const StyledDateWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: theme.palette.primary.main,
  borderRadius: theme.spacing(0.4),
}));

export const StyledDate = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  color: theme.palette.primary.contrastText,
}));

export const StyledMonth = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 700,
  color: theme.palette.primary.contrastText,
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
