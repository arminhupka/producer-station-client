import { type ReactElement } from "react";

import placeholder from "../../../assets/images/no-image.jpg";
import { StyledImage, StyledWrapper } from "./TableCover.styles";

interface IProps {
  image: string | undefined;
  alt: string;
}

const TableCover = ({ alt, image }: IProps): ReactElement => (
  <StyledWrapper>
    <StyledImage src={image ?? placeholder} alt={alt} />
  </StyledWrapper>
);

export default TableCover;
