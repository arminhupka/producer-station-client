import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { type ReactElement, type ReactNode } from "react";

import Header from "../components/Header/Header";
import { useAppSelector } from "../store";

interface IStyledRoot {
  isOpen: boolean;
}

const StyledRoot = styled("div")<IStyledRoot>(({ theme, isOpen }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: isOpen ? 96 : 280,
  },
}));

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps): ReactElement => {
  const isFullMenu = useAppSelector((state) => state.appReducer.isFullMenu);

  return (
    <Box height='100%'>
      <Header />
      <StyledRoot isOpen={!isFullMenu}>
        <Box py={8} width='100%'>
          <Container maxWidth='xl'>{children}</Container>
        </Box>
      </StyledRoot>
    </Box>
  );
};

export default MainLayout;
