import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { AspectEnum } from "./ImageUploader";

interface IStyledImage {
  aspect: AspectEnum;
}

export const StyledImage = styled("img")<IStyledImage>(({ aspect }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  verticalAlign: "bottom",
  aspectRatio: `${aspect === AspectEnum.square ? "1/1" : "16/9"}`,
}));

export const StyledCoverWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  borderRadius: 3,
  overflow: "hidden",
}));
