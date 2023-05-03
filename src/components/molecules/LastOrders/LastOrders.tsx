import { Box, Card, CardContent, Typography } from "@mui/material";
import LastOrdersItem from "./LastOrdersItem/LastOrdersItem";
import { type ReactElement } from "react";

const LastOrders = (): ReactElement => (
  <Card sx={{ height: "100%" }}>
    <CardContent
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Typography variant='overline' color='textSecondary'>
        See your last 6 orders at a glance
      </Typography>
      <Typography variant='h5' color='textPrimary'>
        Recent Orders
      </Typography>
      <Box
        flex={1}
        mt={2}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'>
        <LastOrdersItem />
        <LastOrdersItem />
        <LastOrdersItem />
        <LastOrdersItem />
        <LastOrdersItem isLast />
      </Box>
    </CardContent>
  </Card>
);

export default LastOrders;
