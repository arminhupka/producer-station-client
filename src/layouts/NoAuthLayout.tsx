import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { type ReactElement, type ReactNode } from "react";

import image from "../assets/images/unauth-bg.jpg";

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
          <Container
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              height='100%'
              width='100%'
              maxWidth={500}
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'>
              {children}
            </Box>
          </Container>
        </Grid>
        {!isMobile && (
          <Grid item xs={7} bgcolor='primary.main'>
            <Box
              width='100%'
              height='100%'
              sx={{
                background: `url(${image}) no-repeat center`,
                backgroundSize: "cover",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default NoAuthLayout;
