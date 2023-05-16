import { type ReactElement } from "react";
import { Box, Chip } from "@mui/material";
import {
  StyledDate,
  StyledDateWrapper,
  StyledEarning,
  StyledOrderDetailsWrapper,
  StyledOrderHeading,
  StyledOrderNumber,
  StyledWrapper,
} from "./LastOrder.styles";
import { type OrderListItemDto } from "../../../../api/api-types";
import { formatPrice } from "../../../../utils/formatPrice";

interface IProps {
  isLast?: boolean;
  order: OrderListItemDto;
}

const LastOrdersItem = ({ isLast, order }: IProps): ReactElement => {
  const generateLabel = (): string => {
    if (order.orderItems.length > 1) {
      return `${order.orderItems.length} items`;
    } else {
      return `${order.orderItems.length} item`;
    }
  };

  return (
    <>
      <StyledWrapper noBorder={isLast}>
        <StyledDateWrapper>
          <StyledDate>{new Date(order.paidAt).toLocaleDateString()}</StyledDate>
        </StyledDateWrapper>
        <StyledOrderDetailsWrapper>
          <StyledOrderHeading>Order confirmed</StyledOrderHeading>
          <StyledOrderNumber>{order.orderNumber}</StyledOrderNumber>
        </StyledOrderDetailsWrapper>
        <Box flex='1'>
          <Chip label={generateLabel()} color='secondary' size='small' />
        </Box>
        <Box>
          <StyledEarning>+${formatPrice(order.total)}</StyledEarning>
        </Box>
      </StyledWrapper>
    </>
  );
};

export default LastOrdersItem;
