import { Box, Card, CardContent, Typography } from "@mui/material";
import LastOrdersItem from "./LastOrdersItem/LastOrdersItem";
import { type ReactElement } from "react";
import { type OrderVendorListItem } from "../../../api/api-types";

interface IProps {
  data: OrderVendorListItem[];
}

const LastOrders = ({ data }: IProps): ReactElement => (
  <Card sx={{ height: "100%" }}>
    <CardContent
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Typography variant='overline' color='textSecondary'>
        See your last 6 orders at a glance
      </Typography>
      <Typography variant='h5' color='textPrimary'>
        Recent Orders
      </Typography>
      <Box flex={1} mt={2} display='flex' flexDirection='column' gap={1}>
        {data.slice(0, 6).map((item, i) => (
          <LastOrdersItem key={item._id} order={item} isLast={i === 5} />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default LastOrders;
