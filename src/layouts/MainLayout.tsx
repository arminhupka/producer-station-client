import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement, ReactNode } from "react";

import Header from "../components/Header/Header";

const StyledRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps): ReactElement => {
  return (
    <Box height='100%'>
      <Header />
      <StyledRoot>
        <Box py={8} width='100%'>
          <Container maxWidth='xl'>{children}</Container>
        </Box>
      </StyledRoot>
    </Box>
  );
};

export default MainLayout;
