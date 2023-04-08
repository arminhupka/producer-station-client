import { MoneySharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { type ReactElement } from "react";
import { Helmet } from "react-helmet";

import DashboardCard from "../components/DashboardCard/DashboardCard";
import MainLayout from "../layouts/MainLayout";
import { useQuery } from "react-query";
import { type VendorOverviewResponseDto } from "../api/api";
import { type AxiosResponse } from "axios";
import FullLoader from "../components/atoms/FullLoader/FullLoader";
import { api } from "../utils/api";
import { formatPrice } from "../utils/formatPrice";

const DashboardView = (): ReactElement => {
  const overview = useQuery<AxiosResponse<VendorOverviewResponseDto>>(
    "vendorOverview",
    async () => await api.get<VendorOverviewResponseDto>("vendor/overview"),
  );

  const overviewData = overview.data?.data;

  if (overview.isLoading) {
    return <FullLoader />;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | ProducerStation</title>
      </Helmet>
      <MainLayout>
        {overviewData && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <DashboardCard
                title='Earnings'
                value={formatPrice(overviewData.earnings.thisMonth)}
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
                value={overviewData.products.submittedProducts}
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
        )}
      </MainLayout>
    </>
  );
};

export default DashboardView;
