import {
  StyledHeading,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from "./FileInput.styles";
import { type ReactElement } from "react";

const FileInput = (): ReactElement => (
  <StyledWrapper>
    <StyledLabel htmlFor='input-file-upload'>
      <StyledHeading>Upload a file</StyledHeading>
      <StyledInput id='input-file-upload' />
    </StyledLabel>
  </StyledWrapper>
);

export default FileInput;
