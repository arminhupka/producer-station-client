import {
  Box,
  Button,
  Chip,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { VendorLabelResponseDto } from "../../../api/api";
import NoImagePlaceholder from "../../../assets/images/no-image.jpg";
import { LabelStatusEnum } from "../../../enum/LabelStatusEnum";

interface IProps {
  data: VendorLabelResponseDto[];
  isLoading: boolean;
}

const generateStatus = (status: string): ReactElement => {
  switch (status) {
    case LabelStatusEnum.Draft: {
      return <Chip label={status} color='info' />;
    }
    case LabelStatusEnum.Submitted: {
      return <Chip label={status} color='warning' />;
    }
    case LabelStatusEnum.Active: {
      return <Chip label={status} color='success' />;
    }
    case LabelStatusEnum.Suspended: {
      return <Chip label={status} color='error' />;
    }
    default: {
      return <Chip label={status} />;
    }
  }
};

const GhostProduct = (): ReactElement => (
  <TableRow>
    <TableCell width='64'>
      <Skeleton variant='rounded' width={64} height={64} />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
    </TableCell>
    <TableCell>
      <Skeleton />
      <Skeleton />
    </TableCell>
  </TableRow>
);

const LabelsTable = ({ data, isLoading }: IProps): ReactElement => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Products</TableCell>
          <TableCell>Commission rate</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading && (
          <>
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
            <GhostProduct />
          </>
        )}
        {!isLoading &&
          data &&
          data.map((label) => (
            <TableRow key={label._id}>
              <TableCell width={64}>
                <Box width={64} height={64} overflow='hidden'>
                  <img
                    src={label.avatar ?? NoImagePlaceholder}
                    alt=''
                    width='100%'
                    height='auto'
                  />
                </Box>
              </TableCell>
              <TableCell>
                <Typography>{label.name}</Typography>
              </TableCell>
              <TableCell>0</TableCell>
              <TableCell>{label.commissionRate}%</TableCell>
              <TableCell>{generateStatus(label.status)}</TableCell>
              <TableCell>
                <Link to={`/panel/labels/${label._id}`}>
                  <Button component='div' variant='contained' size='small'>
                    Details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </Paper>
);

export default LabelsTable;
