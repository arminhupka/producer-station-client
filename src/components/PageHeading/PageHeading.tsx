import { Box, Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface IProps {
  title: string;
  children?: ReactNode;
}

const PageHeading = ({ title, children }: IProps): ReactElement => (
  <Box mb={4} display='flex' alignItems='center' justifyContent='space-between'>
    <Typography component='h4' variant='h4' fontWeight='bold'>
      {title}
    </Typography>
    {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
    {children && <Box>{children}</Box>}
  </Box>
);

export default PageHeading;
