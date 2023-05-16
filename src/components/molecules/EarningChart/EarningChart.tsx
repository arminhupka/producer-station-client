import { type ReactElement } from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface IData {
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}

export interface IEarningChartProps {
  months: string[];
  incomes: number[];
}

const ProductsSalesChart = ({
  incomes,
  months,
}: IEarningChartProps): ReactElement => {
  const theme = useTheme();

  console.log(incomes);
  console.log(months);

  const defaultData: IData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: months,
        type: "category",
      },
      colors: [theme.palette.primary.main, theme.palette.secondary.main],
    },
    series: [
      {
        name: "Sales (USD)",
        data: incomes.map((item) => item / 100),
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='overline' color='textSecondary'>
          Get a quick earnings overview of your last few months
        </Typography>
        <Typography variant='h5' color='textPrimary'>
          Income Snapshot
        </Typography>
        <Box mt={2}>
          <Chart
            options={defaultData.options}
            series={defaultData.series}
            type='bar'
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductsSalesChart;
