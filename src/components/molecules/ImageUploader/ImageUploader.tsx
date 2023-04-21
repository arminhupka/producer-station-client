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

export enum AspectEnum {
  square = "square",
  wide = "wide",
}

interface IProps {
  aspect: AspectEnum;
  defaultImage: string | undefined;
  onUpload?: (e: ChangeEvent<HTMLInputElement>) => void | Promise<void>;
  isLoading: boolean;
}

const ImageUploader = ({
  aspect,
  onUpload,
  defaultImage,
  isLoading,
}: IProps): ReactElement => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = (): void => {
    inputRef.current.click();
  };

  return (
    <Card>
      <Box p={2}>
        <StyledCoverWrapper>
          {isLoading && <ImageUploaderLoading />}
          <StyledImage aspect={aspect} src={defaultImage ?? PlaceholderImage} />
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
