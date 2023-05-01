import { MoneySharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { type ReactElement } from "react";
import { Helmet } from "react-helmet";

import DashboardCard from "../components/DashboardCard/DashboardCard";
import MainLayout from "../layouts/MainLayout";
import { useQuery } from "react-query";
import {
  type VendorEarningDto,
  type VendorOverviewResponseDto,
} from "../api/api-types";
import { type AxiosResponse } from "axios";
import FullLoader from "../components/atoms/FullLoader/FullLoader";
import { api } from "../utils/api";
import { formatPrice } from "../utils/formatPrice";
import EarningsChart from "../components/molecules/EarningChart/EarningChart";
import LastOrders from "../components/molecules/LastOrders/LastOrders";

const DashboardView = (): ReactElement => {
  const earnings = useQuery<AxiosResponse<VendorEarningDto[]>>(
    "vendorEarnings",
    async () => await api.get<VendorEarningDto[]>("/vendor/earnings"),
  );

  const overview = useQuery<AxiosResponse<VendorOverviewResponseDto>>(
    "vendorOverview",
    async () => await api.get<VendorOverviewResponseDto>("/vendor/overview"),
  );

  const orders = useQuery<AxiosResponse<number>>(
    "vendorOrders",
    async () => await api.get("/vendor/overview/orders-count"),
  );

  const earningsData = earnings.data?.data;
  const oveviewData = overview.data?.data;

  const currentMonthEarning = earningsData?.at(-1)?.total ?? 0;

  const earningChartData = {
    months: earningsData?.map((d) => d.date.monthName) ?? [],
    incomes: earningsData?.map((d) => d.total) ?? [],
  };

  if (earnings.isLoading || overview.isLoading || orders.isLoading) {
    return <FullLoader />;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | ProducerStation</title>
      </Helmet>
      <MainLayout>
        {earningsData && oveviewData && orders.data && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <DashboardCard
                title='Current month earnings'
                value={`$${formatPrice(currentMonthEarning)}`}
                icon={<MoneySharp />}
                color='success.main'
                isLoading={false}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <DashboardCard
                title='Total Orders'
                value={orders.data.data}
                icon={<MoneySharp />}
                color='primary.main'
                isLoading={false}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <DashboardCard
                title='Awaiting Products'
                value={oveviewData.products.submittedProducts}
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
            <Grid item xs={12} lg={6}>
              <EarningsChart
                incomes={earningChartData.incomes}
                months={earningChartData.months}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <LastOrders />
            </Grid>
          </Grid>
        )}
      </MainLayout>
    </>
  );
};

export default DashboardView;
