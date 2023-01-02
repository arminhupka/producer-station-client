import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  MouseEvent,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
} from "react";

import PlaceholderImage from "../../assets/images/no-image.jpg";
import useChunkUploader from "../../hooks/useChunkUploader";

const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  maxHeight: 300,
  objectFit: "cover",
  verticalAlign: "bottom",
}));

const StyledCoverWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  borderRadius: 3,
  overflow: "hidden",
}));

interface IProps {
  image: string | undefined;
  onUpload: (fileId: string) => void;
  buttonLabel: string;
  disabled?: boolean;
  title?: string;
}

const ImageUploader = ({
  image,
  onUpload,
  buttonLabel,
  disabled,
  title,
}: IProps): ReactElement => {
  const { handleUpload, details, isUploading } = useChunkUploader();

  const inputBtnRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleMuiButton = (e: MouseEvent<HTMLButtonElement>) => {
    inputBtnRef.current.click();
  };

  useEffect(() => {
    if (details) {
      onUpload(details._id);
    }
  }, [details]);

  return (
    <Card>
      <Box p={2}>
        {title && (
          <Typography mb={2} variant='h6' fontWeight={600}>
            {title}
          </Typography>
        )}
        <StyledCoverWrapper>
          {isUploading && (
            <Box
              position='absolute'
              top={0}
              left={0}
              width='100%'
              height='100%'
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{
                background: "rgba(255, 255, 255, .5)",
              }}>
              <CircularProgress size={60} />
            </Box>
          )}
          <StyledImage src={image ?? PlaceholderImage} />
        </StyledCoverWrapper>
      </Box>
      <Divider />
      <Box width='100%' p={2}>
        <input
          type='file'
          hidden
          ref={inputBtnRef}
          onChange={handleUpload}
          accept='image/*'
        />
        <Button
          variant='contained'
          fullWidth
          onClick={handleMuiButton}
          disabled={isUploading || disabled}>
          {buttonLabel}
        </Button>
      </Box>
    </Card>
  );
};

export default ImageUploader;