import { Box, styled } from "@mui/material";
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

interface IStyledCoverWrapper {
  aspect: AspectEnum;
}

export const StyledCoverWrapper = styled(Box)<IStyledCoverWrapper>(
  ({ theme, aspect }) => ({
    position: "relative",
    minHeight: "300px",
    minWidth: "300px",
    display: "flex",
    borderRadius: 3,
    overflow: "hidden",
    background: theme.palette.divider,
    aspectRatio: aspect === AspectEnum.square ? "1/1" : "16/9",
  }),
);
