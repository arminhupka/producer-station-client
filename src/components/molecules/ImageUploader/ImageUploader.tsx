import { Box, Button, Card, Divider } from "@mui/material";
import PlaceholderImage from "../../../assets/images/no-image.jpg";
import {
  type ChangeEvent,
  type MutableRefObject,
  type ReactElement,
  useRef,
} from "react";
import { StyledCoverWrapper, StyledImage } from "./ImageUploader.styles";
import ImageUploaderLoading from "./ImageUploaderLoading/ImageUploaderLoading";
import Typography from "@mui/material/Typography";

export enum AspectEnum {
  square = "square",
  wide = "wide",
}

interface IProps {
  aspect: AspectEnum;
  defaultImage: string | undefined;
  onUpload?: (e: ChangeEvent<HTMLInputElement>) => void | Promise<void>;
  isLoading: boolean;
  title?: string;
}

const ImageUploader = ({
  aspect,
  onUpload,
  defaultImage,
  isLoading,
  title,
}: IProps): ReactElement => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = (): void => {
    inputRef.current.click();
  };

  return (
    <Card>
      {title && (
        <>
          <Box p={2}>
            <Typography component='h3' fontWeight={600}>
              {title}
            </Typography>
          </Box>
          <Divider />
        </>
      )}
      <Box p={2}>
        <StyledCoverWrapper aspect={aspect}>
          {isLoading && <ImageUploaderLoading />}
          {!isLoading && (
            <StyledImage
              aspect={aspect}
              src={defaultImage ?? PlaceholderImage}
            />
          )}
        </StyledCoverWrapper>
      </Box>
      <Divider />
      <Box width='100%' p={2}>
        <input
          type='file'
          accept='image/jpeg, image/png, image/webp'
          hidden
          ref={inputRef}
          onChange={onUpload}
        />
        <Button
          variant='contained'
          fullWidth
          onClick={handleClick}
          disabled={isLoading}>
          Upload Cover
        </Button>
      </Box>
    </Card>
  );
};

export default ImageUploader;
