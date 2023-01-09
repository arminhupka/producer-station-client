import {
  Avatar,
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

interface IProps {
  title: string;
  value: string | number | null;
  icon: ReactElement;
  color: string;
  isLoading?: boolean;
}

const DashboardCard = ({
  title,
  value,
  icon,
  color,
  isLoading,
}: IProps): ReactElement => (
  <Card>
    <CardContent>
      <Box display='flex' alignItems='center'>
        <Box flex={1} mr={2}>
          <Typography color='textSecondary' variant='overline'>
            {isLoading ? <Skeleton width='70%' /> : title}
          </Typography>
          <Typography color='textPrimary' variant='h4'>
            {isLoading ? <Skeleton width='50%' /> : value ?? ""}
          </Typography>
        </Box>
        <Box>
          {isLoading ? (
            <Skeleton variant='circular' height={56} width={56} />
          ) : (
            <Avatar
              sx={{
                backgroundColor: color,
                height: 56,
                width: 56,
              }}>
              {icon}
            </Avatar>
          )}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default DashboardCard;
