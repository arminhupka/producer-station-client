import { MoneySharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { ReactElement } from "react";

import DashboardCard from "../components/DashboardCard/DashboardCard";
import MainLayout from "../layouts/MainLayout";

const DashboardView = (): ReactElement => (
  <MainLayout>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <DashboardCard title='Earnings' value='$245.95' icon={<MoneySharp />} color='success.main' />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DashboardCard title='Orders' value='36' icon={<MoneySharp />} color='primary.main' />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DashboardCard title='Awaiting Products' value='2' icon={<MoneySharp />} color='warning.main' />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DashboardCard title='Disputes' value='0' icon={<MoneySharp />} color='error.main' />
      </Grid>
    </Grid>
  </MainLayout>
);

export default DashboardView;
