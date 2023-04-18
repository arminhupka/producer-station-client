import { type ReactElement } from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { formatPrice } from "../../../utils/formatPrice";

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
        data: incomes.map((item) => +formatPrice(item).slice(1)),
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='overline' color='textSecondary'>
          From last six months
        </Typography>
        <Typography variant='h4' color='textPrimary'>
          Your Income
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
