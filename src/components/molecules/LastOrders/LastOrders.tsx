import { Box, Card, CardContent, Typography } from "@mui/material";
import LastOrdersItem from "./LastOrdersItem/LastOrdersItem";

const LastOrders = () => (
  <Card>
    <CardContent>
      <Typography variant='overline' color='textSecondary'>
        From last six months
      </Typography>
      <Typography variant='h4' color='textPrimary'>
        Last orders
      </Typography>
      <Box mt={2}>
        <LastOrdersItem />
        <LastOrdersItem />
        <LastOrdersItem />
        <LastOrdersItem />
        <LastOrdersItem />
      </Box>
    </CardContent>
  </Card>
);

export default LastOrders;
