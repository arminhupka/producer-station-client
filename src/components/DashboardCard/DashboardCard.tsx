import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";

interface IProps {
  title: string;
  value: string | number;
  icon: ReactElement;
  color: string;
}

const DashboardCard = ({ title, value, icon, color }: IProps): ReactElement => (
  <Card>
    <CardContent>
      <Grid container spacing={3} justifyContent='space-between'>
        <Grid item>
          <Typography color='textSecondary' variant='overline'>
            {title}
          </Typography>
          <Typography color='textPrimary' variant='h4'>
            {value}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: color,
              height: 56,
              width: 56,
            }}>
            {icon}
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default DashboardCard;
