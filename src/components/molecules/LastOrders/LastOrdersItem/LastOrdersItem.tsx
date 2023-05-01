import { type ReactElement } from "react";
import { Box, Chip } from "@mui/material";
import {
  StyledDate,
  StyledDateWrapper,
  StyledEarning,
  StyledMonth,
  StyledOrderDetailsWrapper,
  StyledOrderHeading,
  StyledOrderNumber,
  StyledWrapper,
} from "./LastOrder.styles";

const LastOrdersItem = (): ReactElement => (
  <>
    <StyledWrapper>
      <StyledDateWrapper>
        <StyledMonth>MAY</StyledMonth>
        <StyledDate>11</StyledDate>
      </StyledDateWrapper>
      <StyledOrderDetailsWrapper>
        <StyledOrderHeading>Order confirmed</StyledOrderHeading>
        <StyledOrderNumber>123456789</StyledOrderNumber>
      </StyledOrderDetailsWrapper>
      <Box flex='1'>
        <Chip label='2 items' color='secondary' size='small' />
      </Box>
      <Box>
        <StyledEarning>+ $49.99</StyledEarning>
      </Box>
    </StyledWrapper>
  </>
);

export default LastOrdersItem;
