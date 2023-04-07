import { type ReactElement } from "react";
import { StyledWrapper } from "./FullLoader.styles";
import { CircularProgress } from "@mui/material";

const FullLoader = (): ReactElement => (
  <StyledWrapper>
    <CircularProgress
      size={64}
      sx={{
        color: "#fff",
      }}
    />
  </StyledWrapper>
);

export default FullLoader;
