import { MoneySharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { type ReactElement } from "react";
import { Helmet } from "react-helmet";

import DashboardCard from "../components/DashboardCard/DashboardCard";
import MainLayout from "../layouts/MainLayout";

const DashboardView = (): ReactElement => {
  // const getVendorOverview = useQuery<AxiosResponse<VendorOverviewResponseDto>>(
  //   "vendorOverview",
  //   async () => await api.get<VendorOverviewResponseDto>("vendor/overview"),
  // );

  return (
    <>
      <Helmet>
        <title>Dashboard | ProducerStation</title>
      </Helmet>
      <MainLayout>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DashboardCard
              title='Earnings'
              value='200'
              icon={<MoneySharp />}
              color='success.main'
              isLoading={false}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DashboardCard
              title='Orders'
              value='250'
              icon={<MoneySharp />}
              color='primary.main'
              isLoading={false}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DashboardCard
              title='Awaiting Products'
              value='2'
              icon={<MoneySharp />}
              color='warning.main'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DashboardCard
              title='Disputes'
              value='0'
              icon={<MoneySharp />}
              color='error.main'
            />
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default DashboardView;
