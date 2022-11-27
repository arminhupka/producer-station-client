import { Box, Button, Card, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { ChangeEvent, MouseEvent, MutableRefObject, ReactElement, useRef } from "react";

const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  verticalAlign: "bottom",
}));

const StyledCoverWrapper = styled(Box)(() => ({
  background: "red",
  borderRadius: 3,
  overflow: "hidden",
}));

const CoverUploader = (): ReactElement => {
  const inputBtnRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleMuiButton = (e: MouseEvent<HTMLButtonElement>) => {
    inputBtnRef.current.click();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(inputBtnRef.current.files);
  };

  return (
    <Card>
      <Box p={2}>
        <StyledCoverWrapper>
          <StyledImage src='https://i0.wp.com/producersources.com/wp-content/uploads/2022/09/Brainiac-VSTi-test.png?fit=1000%2C1000&ssl=1' />
        </StyledCoverWrapper>
      </Box>
      <Divider />
      <Box width='100%' p={2}>
        <input type='file' hidden ref={inputBtnRef} onChange={handleInputChange} accept='image/*' />
        <Button variant='contained' fullWidth onClick={handleMuiButton}>
          Upload
        </Button>
      </Box>
    </Card>
  );
};

export default CoverUploader;
