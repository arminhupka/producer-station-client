import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const NoAuthLayout = ({ children }: IProps): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box height='100%'>
      <Grid height='100%' container>
        <Grid item xs={isMobile ? 12 : 5}>
          <Container sx={{ height: "100%" }}>
            <Box
              height='100%'
              width='100%'
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'>
              {children}
            </Box>
          </Container>
        </Grid>
        {!isMobile && (
          <Grid item xs={7} bgcolor='red'>
            image
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default NoAuthLayout;
